// import Laptops from "./Laptops";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LaptopDetails = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h2>Laptop Details:</h2>
        <div class="laptopDetails">
          Name : {props.data.name}
          <br />
          Price : {props.data.price}
        </div>
        <br />
        <button onClick={() => navigate("../", { replace: true })}>
          Go Back
        </button>
      </div>
    </>
  );
};
export default LaptopDetails;
