// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import { TripCard } from "./components/TripCard";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
// import Button from "@mui/material/Button";

const TRIPS = [
  {
    id: crypto.randomUUID(),
    name: "Across the Europe",
    destination: "Barcelona",
    startDate: "16.03.2024",
    endDate: "26.03.2024",
    milestones: ["Frankfurt", "Neapol"],
    equipment: ["map", "photo camera", "4 x spray"],
    coverPhoto: "https://media.timeout.com/images/106185654/750/562/image.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: "Through the Asian Steps",
    destination: "Hongkong",
    startDate: "15.07.2026",
    endDate: "20.07.2026",
    milestones: ["Taipei", "Neapol"],
    equipment: [
      "map",
      "photo camera",
      "4 x spray",
      "backpack",
      "light",
      "bottle water",
    ],
    coverPhoto:
      "https://media.cnn.com/api/v1/images/stellar/prod/190823001700-14-asia-beautiful-town.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
  },
];

function App() {
  const [trips, setTrips] = useState(TRIPS);

  const removeTripByID = (id) => {
    const tripsWithRemoved = trips.filter((t) => t.id !== id);

    setTrips(tripsWithRemoved);
  };

  return (
    <>
      <p>Your trips</p>
      <div className="flex space-x-6">
        {trips.length > 0 ? (
          trips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id}
              name={trip.name}
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
}

export default App;
