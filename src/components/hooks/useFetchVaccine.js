import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
const useFetchVaccines = () => {
  const [vaccines, setVaccine] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/vaccines")
      .then((res) => {
        setVaccine(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return { vaccines, isLoading, error };
};

export default useFetchVaccines;
