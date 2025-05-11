import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../components/alert/ErrorAlert";
import useAuthContext from "../../hooks/useAuthContext";
import PasswordChangeForm from "../dashboard/profile/PasswordChangeForm";
import ProfileEditButton from "../dashboard/profile/ProfileEditButton";
import ProfileForm from "../dashboard/profile/ProfileForm";

const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const { user, updateUserProfile, changePassword, errorMsg } =
    useAuthContext();
  const {
    register,
    watch,
    setValue,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user, setValue]);

  const onSubmit = async (data) => {
    console.log("onsubmit data: ", data);
    try {
      // update Profile
      const profilePayLoad = {
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        address: data.address,
        email: data.email,
      };
      await updateUserProfile(profilePayLoad);
      console.log("profilePayLoad: ", profilePayLoad);
      alert("Profile Updated Successfully");

      // Changing Password
      if (data.current_password && data.new_password) {
        await changePassword({
          current_password: data.current_password,
          new_password: data.new_password,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card w-full max-w-2xl mx-auto bg-gray-800 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl mb-4">Profile information</h1>
        {errorMsg && <ErrorAlert error={errorMsg} />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm
            register={register}
            isEditing={isEditing}
            errors={errors}
          />
          <PasswordChangeForm
            isEditing={isEditing}
            register={register}
            errors={errors}
            watch={watch}
          />

          <ProfileEditButton
            isEditing={isEditing}
            setEditing={setEditing}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
