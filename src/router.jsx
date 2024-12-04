import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./routes/login.jsx";
import { TripDetails } from "./components/TripDetails.jsx";
import { Trips } from "./routes/Trips.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/trips",
    element: <Trips />,
  },
  {
    path: ":slug",
    element: <TripDetails />,
  },
]);
