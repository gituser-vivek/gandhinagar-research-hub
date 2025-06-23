
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  abstract: string;
  pdf_url: string;
  created_at: string;
}

export const usePublications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPublications = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('publications')
        .select('*')
        .order('year', { ascending: false });

      if (error) throw error;
      setPublications(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch publications');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  return { publications, loading, error, refetch: fetchPublications };
};
