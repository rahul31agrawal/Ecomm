import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/authcontext";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const SignupPage = () => {
  const { setAuth } = useAuthContext();
  const [singupInput, setSignupInput] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    passwordOne: false,
    passwordTwo: false,
  });

  const navigate = useNavigate();

  const signupSubmiter = (e) => {
    e.preventDefault();
    if (singupInput.password !== singupInput.confirmPassword) {
      alert("Password doesn't match please check again");
    } else {
      const singupFunc = async () => {
        try {
          const response = await axios.post("/api/auth/signup", {
            fullname: singupInput.fullname,
            email: singupInput.email,
            password: singupInput.password,
          });

          localStorage.setItem("TOKEN", response.data.encodedToken);
          localStorage.setItem(
            "USER_INFO",
            JSON.stringify({
              email: response.data.createdUser.email,
              fullname: response.data.createdUser.fullname,
            })
          );

          setAuth({
            loginStatus: true,
            token: localStorage.getItem("TOKEN"),
            user: JSON.parse(localStorage.getItem("USER_INFO")),
          });

          navigate("/");
        } catch (error) {
          console.log(error);
          if (error.response.status === 422) {
            alert("This email is already exist plz login");
          }
        }
      };
      singupFunc();
    }
  };

  return (
    <>
      <main className="main-container">
        <div className="login-container">
          <form onSubmit={signupSubmiter}>
            <div className="form-content">
              <h1 className="login-heading">Create Account</h1>

              <div>
                <TextField
                  label="Username"
                  placeholder="Enter username"
                  variant="outlined"
                  onChange={(e) => {
                    setSignupInput((item) => ({
                      ...item,
                      fullname: e.target.value,
                    }));
                  }}
                  required
                />
              </div>

              <div>
                <TextField
                  label="Email"
                  placeholder="Enter email id"
                  variant="outlined"
                  onChange={(e) => {
                    setSignupInput((item) => ({
                      ...item,
                      email: e.target.value,
                    }));
                  }}
                  required
                />
              </div>

              <div className="signupPassword">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword.passwordOne ? "text" : "password"}
                    onChange={(e) => {
                      setSignupInput((item) => ({
                        ...item,
                        password: e.target.value,
                      }));
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={(item) =>
                            setShowPassword({
                              ...item,
                              passwordOne: !showPassword.passwordOne,
                            })
                          }
                          edge="end"
                        >
                          {showPassword.passwordOne ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
              </div>

              <div className="confpass">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="standard-adornment-password">
                    {" "}
                    Confirm Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword.passwordTwo ? "text" : "password"}
                    onChange={(e) => {
                      setSignupInput((item) => ({
                        ...item,
                        confirmPassword: e.target.value,
                      }));
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={(item) =>
                            setShowPassword({
                              ...item,
                              passwordTwo: !showPassword.passwordTwo,
                            })
                          }
                        >
                          {showPassword.passwordTwo ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              <div>
                <button id="login-btn" type="submit">
                  Signup
                </button>
              </div>

              <div>
                <button
                  id="create-btn"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Already have an account{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export { SignupPage };
