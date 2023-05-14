import React from "react";
import { Outlet, Link } from "react-router-dom";
// import LaptopDetails from "./LaptopDeatils";
const Laptops = () => {
  return (
    <>
      <div class="laptops">
        <h2>Laptops Available:</h2>
        <nav>
          <ul>
            <li>
              <Link to="/laptop1">Hp Pavilion Laptop</Link>
            </li>
            <li>
              <Link to="/laptop2">Lenovo Core</Link>
            </li>
            <li>
              <Link to="/laptop3">Acer</Link>
            </li>
            <li>
              <Link to="/laptop4">Asus</Link>
            </li>
            <li>
              <Link to="/laptop5">Dell</Link>
            </li>
            <li>
              <Link to="/laptop6">Acer Aspire</Link>
            </li>
            <li>
              <Link to="/laptop7">Think pad</Link>
            </li>
            <li>
              <Link to="/laptop8">Hp Notebook</Link>
            </li>
            <li>
              <Link to="/laptop9">Asus Vivobook</Link>
            </li>
            <li>
              <Link to="/laptop10">Apple M2</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};
export default Laptops;
