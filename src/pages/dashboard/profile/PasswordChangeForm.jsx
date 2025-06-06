import React, { useState } from "react";

const PasswordChangeForm = ({ register, errors, watch, isEditing }) => {
  const [togglePaswordOpen, setTogglePaswordOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setTogglePaswordOpen(!togglePaswordOpen)}
        className="btn btn-link p-0 min-h-0 text-primary font-semibold justify-start"
      >
        Change Password
      </button>
      {togglePaswordOpen && (
        <div className="mt-3 space-y-3 pl-2 border-l-2 border-base-300">
          {/* Current Password */}
          <div className="form-control">
            <label className="label">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-10 bg-base-200"
                disabled={!isEditing}
                {...register("current_password", {
                  required: "Current Password is Required",
                })}
              />
            </div>
            {errors.current_pasword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.current_pasword.message}
              </p>
            )}
          </div>
          {/* New Password */}
          <div className="form-control">
            <label className="label">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-10 bg-base-200"
                disabled={!isEditing}
                {...register("new_password", {
                  required: "New Password is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <div>
                {errors.new_password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.new_password.message}
                  </p>
                )}
              </div>
            </div>
            {errors.current_pasword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.current_pasword.message}
              </p>
            )}
          </div>
          {/* Confirm New Password */}
          <div className="form-control">
            <label className="label">Confirm New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-10 bg-base-200"
                disabled={!isEditing}
                {...register("confirm_new_password", {
                  validate: (value) =>
                    value === watch("new_password") || "Passwords do not match",
                })}
              />
            </div>
            {errors.confirm_new_pasword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_new_pasword.message}
              </p>
            )}
          </div>

          {/* Show Password */}
          <div>
            {isEditing && (
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Show Password</span>
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={showPassword}
                    onChange={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordChangeForm;
