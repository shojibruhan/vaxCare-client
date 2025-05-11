import React from "react";

const ProfileEditButton = ({ isEditing, setEditing, isSubmitting }) => {
  return (
    <div className="flex justify-center pt-4">
      {isEditing ? (
        <div className="space-x-28 my-4">
          <button
            type="submit"
            className="btn btn-info px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-md"></span>
              </div>
            ) : (
              "Save Changes"
            )}
          </button>
          <button
            type="button"
            className="btn btn-outline px-8"
            onClick={() => setEditing(false)}
          >
            Discard Changes
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-info px-8"
          onClick={() => setEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileEditButton;
