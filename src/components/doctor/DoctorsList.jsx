import React, { useState } from "react";
import ErrorAlert from "../alert/ErrorAlert";
import Loading from "../alert/Loading";
import useFetchDoctors from "../hooks/useFetchDoctors";
import Pagination from "../pagination/Pagination";
import DoctorProfile from "./DoctorProfile";
const DoctorsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, error, totalPages, doctors } =
    useFetchDoctors(currentPage);

  return (
    <div>
      <div className="text-2xl text-black grid grid-cols-4">
        {isLoading && <Loading />}
        {error && <ErrorAlert error={error} />}
        {!isLoading &&
          !error &&
          doctors.length > 0 &&
          doctors.map((doctor) => (
            <DoctorProfile
              specialization={doctor.specialization}
              profilePic={doctor.profile_picture}
              user={doctor.user}
            />
          ))}
      </div>
      <div className="flex justify-center my-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DoctorsList;
