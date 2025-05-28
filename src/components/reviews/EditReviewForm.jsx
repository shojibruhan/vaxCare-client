import React from "react";
import StarRatings from "./StarRatings";

const EditReviewForm = ({
  editReview,
  setEditReview,
  onCancelEdit,
  onSave,
}) => {
  console.log(editReview);
  return (
    <div className="mt-4 bg-base-200 space-y-4 p-4 rounded-lg min-w-3xl">
      <div>
        <label className=" label-text font-medium mb-1 block">Ratings</label>
        <StarRatings
          onChange={(value) => setEditReview({ ...editReview, ratings: value })}
          ratings={editReview.ratings}
        />
      </div>
      <div>
        <label className=" label-text font-medium mb-1 block">Comments</label>
        <textarea
          value={editReview.comments}
          onChange={(e) =>
            setEditReview({ ...editReview, comments: e.target.value })
          }
          className=" textarea textarea-bordered w-full min-h-[100px]"
        />
      </div>
      <div className="flex gap-2">
        <button onClick={onSave} className="btn btn-sm btn-success">
          Save Changes
        </button>
        <button onClick={onCancelEdit} className="btn btn-sm btn-ghost">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditReviewForm;
