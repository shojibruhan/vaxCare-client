import React, { useEffect, useState } from "react";
import ErrorAlert from "../components/alert/ErrorAlert";
import VaccineItems from "../components/vaccine/VaccineItems";
import apiClient from "../services/api-client";
const Vaccines = () => {
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
  return (
    <div className=" text-black grid grid-cols-2 space-y-2 px-10">
      {/* loading spiner */}
      {isLoading && (
        <div className="flex justify-end  items-center ml-28 mt-10 py-10">
          <span className="loading loading-infinity loading-xl text-primary"></span>
        </div>
      )}
      {/* error message */}
      {error && <ErrorAlert error={error} />}
      {!isLoading &&
        !error &&
        vaccines.length > 0 &&
        vaccines.map((vaccine) => (
          <VaccineItems
            key={vaccine.id}
            name={vaccine.vaccine_name}
            date={vaccine.first_dose}
            interval={vaccine.dose_interval}
          />
        ))}
      {!isLoading && !error && vaccines.length === 0 && (
        <p className="px-3 py-2 bg-primary text-white rounded-sm shadow-lg">
          No Vaccine Available
        </p>
      )}
    </div>
  );
};

export default Vaccines;
