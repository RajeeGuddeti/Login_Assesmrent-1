import React, { useEffect, useState } from "react";
import LaptopList from "./LaptopList";
// import Laptops from './Laptops';

const Welcome = (props) => {
  // let test = true;

  return (
    <>
      <div>
        <h1>welcome {props.name}</h1>

        <LaptopList />
      </div>
    </>
  );
};
export default Welcome;
