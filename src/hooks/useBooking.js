import authApiClient from "../services/auth-api-client";

const useBooking = () => {
  // const [authTokens] = useState(
  //   () => JSON.parse(localStorage.getItem("authTokens"))?.access
  // );
  const createAppointment = async (userData) => {
    try {
      // console.log(authTokens);
      const response = await authApiClient.post("/bookings/", userData);
      console.log("createAppointment :", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVaccineItem = async (id) => {
    try {
      const res = await authApiClient.get(`/vaccines/${id}/`);
      console.log("getVaccineItem", res.data);
      return res.data;
    } catch (error) {
      console.log("getVaccineItem Error: ", error);
    }
  };
  return { createAppointment, getVaccineItem };
};

export default useBooking;
