import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/authcontext";
import { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const LoginPage = () => {
  const { setAuth } = useAuthContext();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    loginBtn: false,
    loginStatus: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const btnstyle={margin:'8px 0'}
  const inputStyle={width:'12rem'}

  const navigate = useNavigate();

  const loginFunc = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);
      localStorage.setItem(
        "USER_INFO",
        JSON.stringify({
          email: response.data.foundUser.email,
          fullname: response.data.foundUser.fullname,
        })
      );

      setAuth({
        loginStatus: true,
        token: localStorage.getItem("TOKEN"),
        user: JSON.parse(localStorage.getItem("USER_INFO")),
      });

      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        alert("Password is wrong");
      } else if (error.response.status === 404) {
        if (loginInfo.loginStatus) {
          alert("Email doesnt exist");
        }
      }
    }
  };

  const singupSubmiter = (e) => {
    e.preventDefault();
    setLoginInfo((item) => ({ ...item, loginStatus: true }));
    loginFunc();
  };

  const loginAsGuest = () => {
    setLoginInfo((item) => ({
      ...item,
      email: "adarshbalika@gmail.com",
      password: "adarshbalika123",
      loginStatus: false,
    }));
    loginFunc();
  };

  return (
    <>
      <main className="main-container">
        <div className="login-container">
          <form onSubmit={singupSubmiter}>
            <div className="form-content">
              <h1 className="login-heading">Login</h1>
              <div>
                <TextField
                  label="Username"
                  placeholder="Enter username"
                  
                  value={loginInfo.email}
                  onChange={(e) => {
                    setLoginInfo((item) => ({
                      ...item,
                      email: e.target.value,
                    }));

                    e.target.value.length > 0
                      ? setLoginInfo((item) => ({ ...item, loginBtn: true }))
                      : setLoginInfo((item) => ({ ...item, loginBtn: false }));
                  }}
                  required
                />
              </div>

              <div className="passwordContainer">
                
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      style={inputStyle}
                      type={showPassword ? "text" : "password"}
                      value={loginInfo.password}
                      onChange={(e) => {
                        setLoginInfo((item) => ({
                          ...item,
                          password: e.target.value,
                        }));
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                
              </div>

              <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />

              <div>
               

              <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>

              </div>

              <div>
                

                <Button type='submit'  color='primary' variant="contained" style={btnstyle}
                onClick={loginAsGuest}
                fullWidth>Guest Login</Button>

              </div>

              <div>
                

                <Typography > Don't you have an account ?
                     <Link href="/signup" >
                        Sign Up 
                </Link>
                </Typography>

              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export { LoginPage };
