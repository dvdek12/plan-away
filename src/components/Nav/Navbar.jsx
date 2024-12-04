import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex space-x-2 bg-red-200 p-5 rounded-md">
        <Link to="/">Home</Link>
        <Link to="/Trips">Trips</Link>
        <Link to="/Login">Login</Link>
      </div>
    </>
  );
};
