import { useParams } from "react-router-dom";
import { TRIPS } from "../data.json";
import { Navbar } from "./Nav/Navbar";
import { useState } from "react";
import Divider from "@mui/material/Divider";

export const TripDetails = () => {
  const { slug } = useParams();

  const [trip, setTrip] = useState(TRIPS.find((t) => t.slug === slug));

  return (
    <>
      <Navbar />
      <div className="flex flex-col  mt-10 rounded-md">
        <img
          src={trip.coverPhoto}
          alt={`${trip.name}-cover-photo`}
          className="h-64 w-full object-cover rounded-t-md"
        />
        <div className="bg-gray-800">
          <h2 className="text-white text-xl  pt-5 pb-2">{trip.name}</h2>
          <h3 className="text-white pb-5">
            Destination:
            <span className="font-semibold"> {trip.destination}</span>
          </h3>
        </div>

        <div className="bg-gray-900 flex space-x-2 justify-evenly py-3">
          <div className="flex flex-col space-y-2 ">
            <p className="text-gray-500">Start Date:</p>
            <p className="text-gray-300">{trip.startDate}</p>
          </div>
          <div className="flex flex-col space-y-2 ">
            <p className="text-gray-500">End Date:</p>
            <p className="text-gray-300">{trip.endDate}</p>
          </div>
        </div>

        <Divider />

        <div className="bg-gray-900 flex flex-col space-x-2 items-center py-3 px-3">
          <h2 className="text-lg text-white">Milestones:</h2>
          <div className="inline-flex space-x-3">
            {trip.milestones.map((x) => (
              <span key={x} className="text-white text-md">
                {x}
              </span>
            ))}
          </div>
        </div>

        <Divider />

        <div className="bg-gray-900 flex flex-col space-x-2 items-center py-3 px-3 rounded-b-md">
          <h2 className="text-lg text-white">Equipment:</h2>
          <div className="inline-flex space-x-3">
            {trip.equipment.map((x) => (
              <span key={x} className="text-white text-md">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
