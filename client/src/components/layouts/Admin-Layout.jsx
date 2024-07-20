import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  &nbsp;user
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaMessage />
                  &nbsp;contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <FaRegListAlt />
                  &nbsp;services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome />
                  &nbsp;home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
