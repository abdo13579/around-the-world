import { useEffect, useState } from "react";

function getCachedData(key) {
  try {
    const cached = localStorage.getItem(key);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
}

function setCachedData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function useFetchData(url, options) {
  const [data, setData] = useState(() => getCachedData(url) ?? null);
  const [isLoading, setIsLoading] = useState(!getCachedData(url));
  const [error, setError] = useState(null);
  const serializedOptions = JSON.stringify(options ?? {});

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const cachedData = getCachedData(url);

      if (cachedData) {
        if (isMounted) {
          setData(cachedData);
          setIsLoading(false);
        }
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url, options ?? undefined);

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const result = await response.json();

        setCachedData(url, result);

        if (isMounted) {
          setData(result);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, serializedOptions]);

  return { data, isLoading, error };
}
