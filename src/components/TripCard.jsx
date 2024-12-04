// import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const TripCard = ({ id, name, coverPhoto, onRemoveTripByID }) => {
  return (
    <>
      <div className="bg-gray-800 rounded-md">
        <div
          className="w-full h-32  bg-cover rounded-t-md"
          style={{ backgroundImage: `url(${coverPhoto})` }}
        ></div>
        <div className="px-6 py-3 flex flex-col space-y-2">
          <h2 className="text-xl text-white  uppercase py-2">{name}</h2>
          <div className="inline-flex space-x-3 justify-center">
            <Button onClick={() => {}} variant="outlined">
              See Details
            </Button>
            <Button
              onClick={() => onRemoveTripByID(id)}
              startIcon={<DeleteIcon />}
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
