import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ alert, showAlert }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const onChangeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      //prevents refreshing the form
      e.preventDefault();
      console.log(userData);
      let res = await axios.post("/api/user/login", userData);
      // console.log(res.data);/
      showAlert({
        type: "success",
        msg: res.data.success,
      });
    } catch (error) {
      if (error.response.data.errors) {
        let errorString = "";
        error.response.data.errors.forEach((ele) => {
          errorString += ele.msg;
        });
        showAlert({
          type: "error",
          msg: errorString,
        });
      } else {
        showAlert({
          type: "error",
          msg: error.response.data.error,
        });
      }
    }
  };

  return (
    <>
      <div className="container">
        {alert !== null && (
          <h3 className={`alert-${alert}`}>{alert.msg}</h3>
        )}

        <div id="body" className="body">
          <h3> FORM FOR REGISTERING</h3>
          <div>
            <form id="form" onSubmit={onSubmitHandler}>
              <input
                type="email"
                id="lname"
                name="email"
                autoComplete="off"
                placeholder="Email"
                value={email}
                onChange={onChangeHandler}
              />
              <br></br>
              <br></br>

              <input
                type="password"
                id="lname"
                name="password"
                autoComplete="off"
                placeholder="Password"
                value={password}
                onChange={onChangeHandler}
              />
              <br></br>
              <br></br>

              <input type="submit" value="Login" />
            </form>
          </div>
          <br></br> <br></br>
          <label for="lname">Not Yet Registered ?</label>
          <Link to="/login"> Register</Link>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Login;