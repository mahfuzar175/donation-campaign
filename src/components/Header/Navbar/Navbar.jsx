import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-5">
        <Logo></Logo>
        <ul className="flex gap-14">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : " "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : " "
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : " "
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
