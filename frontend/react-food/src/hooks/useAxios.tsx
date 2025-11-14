"use client";
import { useState, useEffect, useCallback } from 'react';

// API
import { api } from "../lib/api";
//Types
import { apiRequestProps } from '@/types/apiType';

export function useAxios<T>({
  endpoint,
  method = "get",
  body,
  autofetch = true
}: apiRequestProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async (newBody?: any): Promise<{ data: T | null }> => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api.request<T>({
          url: endpoint,
          method,
          data: newBody || body,
        });

        setData(response.data);
        return { data: response.data }
      } catch (err: any) {
        const message = 
          err.response?.data?.message ||
          err.message ||
          "Erro desconhecido ao fazer requisição.";
        setError(message)
        return { data: null }
      } finally {
        setIsLoading(false)
      }
    },
    [endpoint, method, body]
  );

  useEffect(() => {
    if (autofetch) {
      fetchData()
    }
  }, [autofetch, fetchData])

  return { data, isLoading, error, refetch: fetchData }
}

