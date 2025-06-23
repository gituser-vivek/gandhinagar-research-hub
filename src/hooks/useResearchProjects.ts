
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ResearchProject {
  id: string;
  title: string;
  description: string;
  status: string;
  team_members: string[];
  funding_agency: string;
  amount: string;
  duration: string;
  publications_count: number;
  created_at: string;
}

export const useResearchProjects = () => {
  const [projects, setProjects] = useState<ResearchProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('research_projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, loading, error, refetch: fetchProjects };
};
