import React from "react";
import useFetchVaccines from "../../hooks/useFetchVaccine";
import ErrorAlert from "../alert/ErrorAlert";
import Loading from "../alert/Loading";
import VaccineItems from "./VaccineItems";
const Vaccines = () => {
  const { isLoading, error, vaccines } = useFetchVaccines();

  return (
    <div className=" text-black grid grid-cols-2 space-y-2 px-10">
      {/* loading spiner */}
      {isLoading && <Loading />}
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
            doctor={vaccine.doctor_name}
            vaccineId={vaccine.id}
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
