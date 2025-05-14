import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Link, useParams } from "react-router";
import Virus from "../assets/virus.png";
import Loading from "../components/alert/Loading";
import useBooking from "../hooks/useBooking";
import apiClient from "../services/api-client";

const VaccineDetails = () => {
  // const { vaccines } = useFetchVaccines();
  const [vaccine, setVaccine] = useState(null);
  const [isAdding, setAdding] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { vaccineId } = useParams();
  const { createAppointment } = useBooking();

  useEffect(() => {
    setLoading(true);
    apiClient.get(`/vaccines/${vaccineId}/`).then((res) => {
      setVaccine(res.data);
      // console.log("Item data", res.data.doctor_name);
      setLoading(false);
    });
  }, [vaccineId]);

  useEffect(() => {}, [isAdding, isAdded]);

  const bookAppointment = () => {
    setAdding(true);
    setAdded(false);
    // console.log("click: ", vaccine.id, vaccine.first_dose);
    // console.log("1", isAdding, isAdded);
    try {
      setAdding(false);

      createAppointment({
        vaccine: vaccine.id,
        dose_one: vaccine.first_dose,
      });
      setAdded(true);
      // console.log("2: ", isAdding, isAdded);
    } catch (error) {
      console.log(error);
    } finally {
      setAdded(false);
      // console.log("3: ", isAdding, isAdded);
    }
  };

  // const addToAppointment = () => {
  //   setAdding(true);
  //   setTimeout(() => {
  //     setAdding(false);
  //     setAdded(true);
  //     setTimeout(() => {
  //       setAdded(false);
  //     }, 2000);
  //   }, 1000);
  // };
  // console.log("vaccine", vaccine);
  if (loading && !vaccine)
    return (
      <div className="text-black text-2xl">
        <Loading />
      </div>
    );
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              {vaccine?.vaccine_name}
              <span className="text-5xl sm:text-7xl"></span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-5">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            {isAdding ? (
              <div className="btn bg-gray-100 rounded-lg mt-8">
                <span className="loading loading-infinity loading-md text-info"></span>
              </div>
            ) : isAdded ? (
              <span className="flex items-center btn btn-success uppercase rounded-lg mt-8">
                <FiCheck className="mr-2 h-4 w-4" /> Added to your Booking list
              </span>
            ) : (
              <div className="flex mt-8">
                <button
                  onClick={bookAppointment}
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Book An Appontment
                </button>

                {/* <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Read more
              </a> */}
              </div>
            )}
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img
              //   src="https://www.tailwind-kit.com/images/object/10.png"
              src={Virus}
              className="max-w-xs md:max-w-sm m-auto"
            />
          </div>
        </div>
      </div>
      <Link to="/vaccines">
        <div className="flex items-center gap-3 justify-start ml-20 mt-24">
          <span>
            <FaArrowLeft />
          </span>
          <span>Back to Product</span>
        </div>
      </Link>
    </main>
  );
};

export default VaccineDetails;
