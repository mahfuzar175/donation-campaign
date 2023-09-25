import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="md:flex md:justify-between md:items-center p-5 gap-6 md:gap-0">
        <div className="flex justify-center mb-4 md:mb-0">
          <Logo></Logo>
        </div>
        <ul className="flex justify-center gap-8 md:gap-14">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending text-lg font-medium"
                  : isActive
                  ? "text-[#FF444A] text-lg font-bold underline"
                  : "text-lg font-medium"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending text-lg font-medium"
                  : isActive
                  ? "text-[#FF444A] text-lg font-bold underline"
                  : "text-lg font-medium"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending text-lg font-medium"
                  : isActive
                  ? "text-[#FF444A] text-lg font-bold underline"
                  : "text-lg font-medium"
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
