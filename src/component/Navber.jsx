import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div className="">
        <ul className="flex gap-16 justify-center w-[50%] h-[10%] bg-orange-100 text-black m-auto">
          {/* <Link to='/about'><li>about </li></Link> */}
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/registor">
            <li>Registor</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
