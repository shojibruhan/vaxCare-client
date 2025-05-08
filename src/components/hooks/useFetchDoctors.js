import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

const useFetchDoctors = (currentPage) => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setToatpages] = useState();
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(`/doctors/?page=${currentPage}`);
        const data = await response.data;
        console.log(data.results);
        setToatpages(Math.ceil(data.count / data.results.length));
        setDoctors(data.results);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [currentPage]);

  return { doctors, isLoading, error, totalPages };
};
export default useFetchDoctors;
