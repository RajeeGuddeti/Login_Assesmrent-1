import React from "react";
import "./styles.css";
import {
  Link,
  Outlet,
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import LaptopDetails from "./LaptopDeatils";
import Laptops from "./Laptops";
import NoPage from "./NoPage";
/* The Outlet component renders the matching child route with its respective component from the parent Routes' component collection of Route components. */
const LaptopList = (props) => {
  let sampleLaptopDetails = [
    {
      name: "Hp Pavilion",
      price: "60,000"
    },
    {
      name: "Lenovo Core",
      price: "55,000"
    },
    {
      name: "Acer",
      price: "89,000"
    },
    {
      name: "Asus",
      price: "76,000"
    },
    {
      name: "Dell",
      price: "56,000"
    },
    {
      name: "Acer Aspire",
      price: "88,000"
    },
    {
      name: "Think pad",
      price: "99,999"
    },
    {
      name: "Hp Notebook",
      price: "67,000"
    },
    {
      name: "Asus Vivobook",
      price: "78,000"
    },
    {
      name: "Apple M2",
      price: "52,000"
    }
  ];
  return (
    <div>
      <div class="Welcome">
        <h1>welcome {props.name}</h1>
      </div>
      <Router>
        {/* <Route path="/" element={<Laptops/>}/> */}
        <Routes>
          <Route path="/" element={<Laptops />} />
          <Route
            path="/laptop1"
            element={<LaptopDetails data={sampleLaptopDetails[0]} />}
          />
          <Route
            path="/laptop2"
            element={<LaptopDetails data={sampleLaptopDetails[1]} />}
          />
          <Route
            path="/laptop3"
            element={<LaptopDetails data={sampleLaptopDetails[2]} />}
          />
          <Route
            path="/laptop4"
            element={<LaptopDetails data={sampleLaptopDetails[3]} />}
          />
          <Route
            path="/laptop5"
            element={<LaptopDetails data={sampleLaptopDetails[4]} />}
          />
          <Route
            path="/laptop6"
            element={<LaptopDetails data={sampleLaptopDetails[5]} />}
          />
          <Route
            path="/laptop7"
            element={<LaptopDetails data={sampleLaptopDetails[6]} />}
          />
          <Route
            path="/laptop8"
            element={<LaptopDetails data={sampleLaptopDetails[7]} />}
          />
          <Route
            path="/laptop9"
            element={<LaptopDetails data={sampleLaptopDetails[8]} />}
          />
          <Route
            path="/laptop10"
            element={<LaptopDetails data={sampleLaptopDetails[9]} />}
          />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      <Outlet />
    </div>

    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Laptops/>}>
    //       {/* <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />}>
    //         <Route path="blog1" element={<Blog1 />} />
    //         <Route path="blog2" element={<Blog2 data={blog} />} />
    //       </Route>
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default LaptopList;
