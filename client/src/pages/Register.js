import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { Alert } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMemeber: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert } = useAppContext();

  console.log(showAlert);
  const { name, email, password, isMemeber } = values;

  const handleChange = (e) => console.log(e.target);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMember = () => {
    setValues({ ...values, isMemeber: !isMemeber });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{isMemeber ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name Input */}
        {!isMemeber && (
          <FormRow
            type="text"
            name="name"
            handleChange={handleChange}
            value={name}
          />
        )}
        {/* email Input */}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={email}
        />
        {/* password Input */}
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={password}
        />
        <button className="btn btn-block">Submit</button>
        <p>
          {isMemeber ? "not a member?" : "already a member?"}

          <button className="member-btn" onClick={toggleMember}>
            {isMemeber ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
