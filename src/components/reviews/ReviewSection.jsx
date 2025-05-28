/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { MdOutlineRateReview } from "react-icons/md";
import { useParams } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import apiClient from "../../services/api-client";
import authApiClient from "../../services/auth-api-client";
import Loading from "../alert/Loading";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const ReviewSection = () => {
  const { vaccineId } = useParams();
  const [canReview, setCanReview] = useState(false);
  const [reviews, setReview] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [editReview, setEditReview] = useState({ ratings: 0, commens: "" });
  const [editingId, setEditingId] = useState(null);
  const { user } = useAuthContext();
  const onSubmit = async (data) => {
    try {
      const response = await authApiClient.post(
        `/vaccines/${vaccineId}/reviews/`,
        data
      );
      console.log(response.data);
      fetchReview();
    } catch (error) {
      console.log("Error submitting review: ", error);
    }
  };

  const checkUserPermission = async () => {
    try {
      const response = await authApiClient.get(
        `/booked/has-vaccinated/${vaccineId}/`
      );
      // console.log(response.data.has_vaccinated);
      setCanReview(response.data.has_vaccinated);
    } catch (error) {
      console.log("Error: permission to review", error);
    }
  };

  const fetchReview = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get(`/vaccines/${vaccineId}/reviews/`);
      console.log(response.data);
      setReview(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateReview = async (reviewId) => {
    try {
      await authApiClient.put(
        `/vaccines/${vaccineId}/reviews/${reviewId}/`,
        editReview
      );
      setEditingId(null);
      fetchReview();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await authApiClient.delete(
        `/vaccines/${vaccineId}/reviews/${reviewId}/`,
        editReview
      );
      fetchReview();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserPermission();
    fetchReview();
  }, []);
  return (
    <div className="container mx-auto px-6 grid grid-cols-3 relative py-16">
      <div>{canReview && <ReviewForm onSubmit={onSubmit} />}</div>
      {isLoading ? (
        <Loading />
      ) : reviews.length === 0 ? (
        <div className="text-center py-8 font-serif">
          <div>
            <MdOutlineRateReview className="h-32 w-32 text-indigo-500 ml-36" />
          </div>
          <h3 className="text-3xl font-semibold mb-2 text-error ">
            No Review Yet
          </h3>
          <p className=" text-base-content/70 ">
            Be the First One to Review This Product
          </p>
        </div>
      ) : (
        <div className="col-span-2">
          <ReviewList
            reviews={reviews}
            user={user}
            editReview={editReview}
            setEditReview={setEditReview}
            editingId={editingId}
            setEditingId={setEditingId}
            handleUpdateReview={handleUpdateReview}
            handleDeleteReview={handleDeleteReview}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
