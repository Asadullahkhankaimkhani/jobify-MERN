import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { Alert } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert, displayAlert, isLoading } = useAppContext();

  const { name, email, password, isMember } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log("Already a Member");
    }

    console.log(values);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name Input */}
        {!isMember && (
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
        <button className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {isMember ? "not a member?" : "already a member?"}

          <button type="button" className="member-btn" onClick={toggleMember}>
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
