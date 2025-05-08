import React from "react";

const DoctorProfile = ({ specialization, profilePic, user }) => {
  return (
    // <div className="card card-side bg-white shadow-sm">
    //   <figure>
    //     <img
    //       //   src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
    //       src={profilePic}
    //       className="w-1/2"
    //       alt="Movie"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       {user.first_name} {user.last_name}
    //     </h2>
    //     <p>Click the button to watch on Jetflix app.</p>
    //     <p>{specialization}</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">{user.email}</button>
    //     </div>
    //   </div>
    // </div>

    <div class="flex items-center h-screen w-full justify-center">
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src={profilePic}
              alt={user.first_name}
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              {user.first_name} {user.last_name}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>{specialization}</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td class="px-2 py-2">{user.address}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">{user.phone_number}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">{user.email}</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
