import { useState } from "react";

export function useSuspenseFetch(fetchData) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  if (!data) {
    throw fetchData()
      .then((result) => setData(result))
      .catch((err) => setError(err));
  }

  if (error) throw error;
  
  return data;
}
