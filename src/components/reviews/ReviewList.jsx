import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = ({
  reviews,
  user,
  editReview,
  setEditReview,
  editingId,
  setEditingId,
  handleUpdateReview,
  handleDeleteReview,
}) => {
  return (
    <div className="space-y-10">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          user={user}
          isEditing={editingId === review.id}
          editReview={editReview}
          setEditReview={setEditReview}
          onEditClick={() => {
            setEditingId(review.id);
            setEditReview({
              ratings: review.ratings,
              comments: review.comments,
            });
          }}
          onCancelEdit={() => setEditingId(null)}
          onSaveEdit={handleUpdateReview}
          onDeleteClick={() => handleDeleteReview(review.id)}
        />
      ))}
    </div>
  );
};

export default ReviewList;
