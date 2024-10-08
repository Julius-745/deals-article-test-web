import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { IArticles } from '../type/articles';

const useFetchData = (section: string) => {
  const baseURL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState<IArticles[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(baseURL + section);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [section, baseURL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    refetch: fetchData,
  };
};

export default useFetchData;
