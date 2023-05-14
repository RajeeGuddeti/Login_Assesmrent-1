import React from "react";
import "./styles.css";
// import Welcome from "./Welcome";
import LaptopList from "./LaptopList";
const UserInputForm = () => {
  const [username, setUsername] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const onUsernameSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <h1>
        {/* <Welcome name={username} /> */}
        <LaptopList name={username} />
      </h1>
    );
  }
  return (
    <div class="container">
      <form onSubmit={onUsernameSubmit} className="form">
        <label htmlFor="username">Username</label>

        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onUsernameChange}
          required
          placeholder="Please Enter Username"
        />

        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};
export default UserInputForm;
