import { useState } from "react";

export function usePostCriteria<T>(endpoint: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  async function postData(formData: FormData) {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      const apiUrl = "http://26.225.50.6:5264/api/";
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // Send the FormData directly in the request body
      };

      console.log("USE POST CRITERIA ", requestOptions, formData);

      const response = await fetch(`${apiUrl}${endpoint}`, requestOptions);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData?.message || "Something went wrong";
        setError(errorMessage);
        console.error("usePostCriteria Error:", errorMessage);
        setIsLoading(false);
        return;
      }

      const responseText = await response.text();
      const responseData = responseText ? JSON.parse(responseText) : {};
      setIsLoading(false);
      setError(null);
      setData(responseData);
    } catch (err) {
      setIsLoading(false);
      setError("An unexpected error occurred");
      console.error("usePostCriteria Exception: ", err);
    }
  }

  return { postData, isLoading, error, data };
}
