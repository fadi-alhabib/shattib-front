import { useEffect, useState } from "react";

export function usePostForm<T>(
  endpoint: string,
  method?: "POST",
  isToken?: boolean
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Change error to be a string for the message
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (method !== "POST") {
      getData();
    }

    async function getData() {
      setIsLoading(true);
      try {
        const apiUrl = "http://26.225.50.6:5264/api/";
        console.log(`${apiUrl}${endpoint}`);
        const response = await fetch(`${apiUrl}${endpoint}`);

        if (!response.ok) {
          const errorData = await response.json();
          const errorMessage = errorData?.message || "Something went wrong";
          setError(errorMessage);
          console.error("usePostForm Error:", errorMessage);
          setIsLoading(false);
          return;
        }

        const responseData = await response.json();
        setIsLoading(false);
        setError(null);
        setData(responseData);
      } catch (err) {
        setIsLoading(false);
        setError("An unexpected error occurred");
        console.error("usePostForm Exception: ", err);
      }
    }
  }, [endpoint, method]);

  async function postData(body: FormData) {
    setIsLoading(true);
    try {
      const apiUrl = "http://26.225.50.6:5264/api/";
      const requestOptions = {
        method: "POST",
        body,
      };

      const response = await fetch(`${apiUrl}${endpoint}`, requestOptions);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData?.message || "Something went wrong";
        setError(errorMessage);
        console.error("usePostForm Error:", errorMessage);
        setIsLoading(false);
        return;
      }

      // Safely parse the JSON response
      const responseText = await response.text();
      const responseData = responseText ? JSON.parse(responseText) : {};
      setIsLoading(false);
      setError(null);
      setData(responseData);
    } catch (err) {
      setIsLoading(false);
      setError("An unexpected error occurred");
      console.error("usePostForm Exception: ", err);
    }
  }

  return { postData, isLoading, error, data };
}
