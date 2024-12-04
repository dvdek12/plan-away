import { useState } from "react";
import { TRIPS } from "../data.json";
import { Navbar } from "../components/Nav/Navbar";
import { TripCard } from "../components/TripCard";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const Trips = () => {
  const [trips, setTrips] = useState(TRIPS);

  const removeTripByID = (id) => {
    const tripsWithRemoved = trips.filter((t) => t.id !== id);

    setTrips(tripsWithRemoved);
  };

  return (
    <>
      <Navbar />

      <div className="flex space-x-6">
        {trips.length > 0 ? (
          trips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id}
              name={trip.name}
              slug={trip.slug}
              coverPhoto={trip.coverPhoto}
              onRemoveTripByID={removeTripByID}
            />
          ))
        ) : (
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl text-white ">
              Sorry you have no planned trips! :(
            </h2>
            <Button
              onClick={() => {}}
              variant="contained"
              endIcon={<AddBoxIcon />}
            >
              Add New Trip
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
