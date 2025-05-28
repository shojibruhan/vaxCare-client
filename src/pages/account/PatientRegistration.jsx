import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../components/alert/ErrorAlert";
import SuccessAlert from "../../components/alert/SuccessAlert";
import SuccessModal from "../../components/alert/SuccessModal";
import useAuthContext from "../../hooks/useAuthContext";
import authApiClient from "../../services/auth-api-client";

const PatientRegistration = () => {
  const { registerUser, errorMsg } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  const [isloading, setloading] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [patientInfo, setPatientInfo] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   setloading(true);
  //   delete data.confirmPassword;
  //   console.log(data);
  //   setPatientInfo(data);
  //   console.log("patientInfo", patientInfo);
  //   try {
  //     const response = await registerUser(data);
  //     // const response = await authApiClient.post("/patients/", data);
  //     console.log(response.data);
  //     setNextPage(true);
  //     if (response.success) {
  //       setSuccessMsg(response.message);
  //     }
  //   } catch (error) {
  //     console.log("error: ", error.response.data);
  //   }
  // };

  const submitPatient = async (data) => {
    console.log("submitPatient: ", data);
    try {
      const response = await authApiClient.post("/patients/", {
        user: patientInfo,
      });
      console.log("patient", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-44">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {errorMsg && <ErrorAlert error={errorMsg} />}
            {successMsg && <SuccessAlert msg={successMsg} />}
            {successMsg && <SuccessModal msg={successMsg} />}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            {!nextPage ? (
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(submitPatient)}
              >
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("first_name", {
                      required: "First Name Required",
                    })}
                  />
                  {errors.first_name && (
                    <span className="label-text-alt text-error">
                      {errors.first_name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("last_name", {
                      required: "Last Name Required",
                    })}
                  />
                  {errors.last_name && (
                    <span className="label-text-alt text-error">
                      {errors.last_name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("email", { required: "Email Required" })}
                  />
                  {errors.email && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone_number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    id="phone_number"
                    type="number"
                    placeholder="+880 123 456 789"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("phone_number ")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Dhaka, Bangladesh"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("address")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", {
                      required: "Password is Required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("confirmPassword", {
                      required: "Confirm Password is Required",
                      validate: (value) =>
                        value === watch("password") || "password do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <span className="label-text-alt text-error">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  // disabled={isloading}
                  // onClick={() => setNextPage(true)}
                  // onClick={handleSubmit(onSubmit)}
                >
                  Next
                </button>
              </form>
            ) : (
              <form
                className="space-y-4 md:space-y-6"
                // onSubmit={handleSubmit(submitPatient)}
              >
                <div>
                  <label
                    htmlFor="nid"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    NID
                  </label>
                  <input
                    id="nid"
                    type="number"
                    placeholder="123456789"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("nid", {
                      required: "Submit your NID",
                    })}
                  />
                  {errors.nid && (
                    <span className="label-text-alt text-error">
                      {errors.nid.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="date_of_birth"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date Of Birth
                  </label>
                  <input
                    id="date_of_birth"
                    type="date"
                    // placeholder="Last Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("date_of_birth", {
                      required: "Date of Birth required",
                    })}
                  />
                  {errors.date_of_birth && (
                    <span className="label-text-alt text-error">
                      {errors.date_of_birth.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Medical History
                  </label>
                  <input
                    id="text"
                    type="text"
                    placeholder="Astma, Pneumonia"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("medical_history")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  // disabled={isloading}
                  onClick={handleSubmit(submitPatient)}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientRegistration;
