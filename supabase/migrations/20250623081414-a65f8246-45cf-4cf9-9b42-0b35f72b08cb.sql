
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  department TEXT,
  position TEXT,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create research projects table
CREATE TABLE public.research_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'ongoing' CHECK (status IN ('ongoing', 'completed', 'proposed')),
  team_members TEXT[],
  funding_agency TEXT,
  amount TEXT,
  duration TEXT,
  publications_count INTEGER DEFAULT 0,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create publications table
CREATE TABLE public.publications (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  authors TEXT[],
  journal TEXT,
  year INTEGER,
  doi TEXT,
  abstract TEXT,
  pdf_url TEXT,
  project_id UUID REFERENCES public.research_projects(id),
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create news table
CREATE TABLE public.news (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create team members table
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position TEXT,
  department TEXT,
  email TEXT,
  phone TEXT,
  research_interests TEXT[],
  bio TEXT,
  image_url TEXT,
  social_links JSONB,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Research projects policies
CREATE POLICY "Anyone can view research projects" ON public.research_projects FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create projects" ON public.research_projects FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Users can update own projects" ON public.research_projects FOR UPDATE USING (auth.uid() = created_by);
CREATE POLICY "Users can delete own projects" ON public.research_projects FOR DELETE USING (auth.uid() = created_by);

-- Publications policies
CREATE POLICY "Anyone can view publications" ON public.publications FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create publications" ON public.publications FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Users can update own publications" ON public.publications FOR UPDATE USING (auth.uid() = created_by);
CREATE POLICY "Users can delete own publications" ON public.publications FOR DELETE USING (auth.uid() = created_by);

-- News policies
CREATE POLICY "Anyone can view published news" ON public.news FOR SELECT USING (published = true OR auth.uid() = created_by);
CREATE POLICY "Authenticated users can create news" ON public.news FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Users can update own news" ON public.news FOR UPDATE USING (auth.uid() = created_by);
CREATE POLICY "Users can delete own news" ON public.news FOR DELETE USING (auth.uid() = created_by);

-- Team members policies
CREATE POLICY "Anyone can view active team members" ON public.team_members FOR SELECT USING (is_active = true OR auth.uid() = created_by);
CREATE POLICY "Authenticated users can create team members" ON public.team_members FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Users can update team members they created" ON public.team_members FOR UPDATE USING (auth.uid() = created_by);
CREATE POLICY "Users can delete team members they created" ON public.team_members FOR DELETE USING (auth.uid() = created_by);

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data ->> 'full_name');
  RETURN new;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
