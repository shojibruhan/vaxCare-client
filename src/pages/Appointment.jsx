import React from "react";
import AppointmentSummery from "../components/appointment/AppointmentSummery";

const Appointment = () => {
  const booked = [
    {
      id: "599e6789-1425-4445-ba24-68f34fdf9bbb",
      patient_name: "Patient patient",
      vaccine: "06902238-c348-46dc-9e5f-e436341d4316",
      dose_number: 1,
      created_at: "2025-04-06",
      status: "Pending",
      dose_one: "2025-05-01",
      dose_two: "2025-07-30",
    },
    {
      id: "eeac128d-af27-4e47-9100-e817179593f5",
      patient_name: "Male Patient",
      vaccine: "2eabeb2f-a3a5-4b3f-88da-59174651cbda",
      dose_number: 2,
      created_at: "2025-05-12",
      status: "Pending",
      dose_one: "2025-05-30",
      dose_two: null,
    },
  ];
  return (
    <>
      {booked.map((items) => (
        <AppointmentSummery key={items.id} items={items} />
      ))}
    </>
  );
};

export default Appointment;
