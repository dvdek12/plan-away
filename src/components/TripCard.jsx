// import { useState } from "react";
import Button from "@mui/material/Button";

export const TripCard = ({
  id,
  name,
  destination,
  startDate,
  endDate,
  milestones,
  equipment,
  coverPhoto,
}) => {
  return (
    <>
      <div className="bg-gray-800 rounded-md">
        <div
          className="w-full h-32  bg-cover rounded-t-md"
          style={{ backgroundImage: `url(${coverPhoto})` }}
        ></div>
        <div className="px-6 py-3 flex flex-col space-y-2">
          <h2 className="text-xl text-white  uppercase">{name}</h2>
          <Button onClick={() => {}} variant="outlined">
            See More
          </Button>
        </div>
      </div>
    </>
  );
};
