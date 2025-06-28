import { useEffect, useState } from "react";

export const useConfig = () => {
  const [config, setConfig] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const appName = process.env.REACT_APP_APP_NAME || process.env.NEXT_PUBLIC_APP_NAME;
  const environment = process.env.REACT_APP_ENVIRONMENT || process.env.NEXT_PUBLIC_ENVIRONMENT;
  const apiBase = process.env.REACT_APP_CONFIG_API || process.env.NEXT_PUBLIC_CONFIG_API;
  const apiKey = process.env.REACT_APP_CONFIG_API_KEY || process.env.NEXT_PUBLIC_CONFIG_API_KEY;

  useEffect(() => {
    if (!appName || !environment || !apiKey || !apiBase) {
      setError("Missing required configuration parameters");
      setLoading(false);
      console.error("❌ Missing environment variables in useConfig");
      return;
    }

    const controller = new AbortController();

    const fetchConfig = async () => {
      try {
        const url = `${apiBase}?appName=${appName}&environment=${environment}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            response.status === 403 ? "Invalid API key" : `Failed to fetch config: ${response.status}`
          );
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setConfig(data[0]?.services || {});
        } else if (data?.services) {
          setConfig(data.services);
        } else {
          throw new Error("Config response structure invalid.");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          console.error("❌ Config fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();

    return () => {
      controller.abort();
    };
  }, [appName, environment, apiBase, apiKey]);

  return { config, error, loading };
};
