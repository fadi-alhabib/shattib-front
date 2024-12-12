import { useEffect, useState } from "react";

export function useApi<T>(
  endpoint: string,
  method?: "POST" | "DELETE",
  isToken?: boolean,
  noResponse?: boolean
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (method != "POST" && method != "DELETE") {
      getData();
    }

    async function getData() {
      setIsLoading(true);
      try {
        const apiUrl = "http://26.225.50.6:5264/api/";
        console.log(`${apiUrl}${endpoint}`);
        await fetch(`${apiUrl}${endpoint}`)
          .then(async (res) => {
            setIsLoading(false);
            setError(false);
            setData(await res.json());
          })
          .catch((err) => {
            setIsLoading(false);
            setError(true);
            console.log("useApi Error: ", err);
          });
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.log("useApi Exception: ", error);
      }
    }
  }, [endpoint, method]);

  async function postData(body: object) {
    let token;
    if (isToken) {
      token = localStorage.getItem("accessToken");
    }
    console.log(body);

    setIsLoading(true);
    try {
      const apiUrl = "http://26.225.50.6:5264/api/";
      console.log(`${apiUrl}${endpoint}`);
      let headers = {};
      if (token) {
        headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
      } else {
        headers = { "Content-Type": "application/json" };
      }
      console.log(headers);
      const requestOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      };
      await fetch(`${apiUrl}${endpoint}`, requestOptions)
        .then(async (res) => {
          setIsLoading(false);
          setError(false);
          if (!noResponse) {
            setData(await res.json());
          }
          // console.log(data, "data fetch");
          // console.log(res.json(), "res.json fetch");
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
          console.log("useApi Error: ", err);
        });
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log("useApi Exception: ", error);
    }
  }

  async function deleteData(id: number) {
    setIsLoading(true);
    try {
      const apiUrl = "http://26.225.50.6:5264/api/";
      console.log(`${apiUrl}${endpoint}/${id}`);
      const requestOptions = {
        method: "DELETE",
      };
      await fetch(`${apiUrl}${endpoint}/${id}`, requestOptions)
        .then(async (res) => {
          setIsLoading(false);
          setError(false);
          setData(await res.json());
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
          console.log("useApi Error: ", err);
        });
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log("useApi Exception: ", error);
    }
  }

  return { deleteData, postData, isLoading, error, data };
}
