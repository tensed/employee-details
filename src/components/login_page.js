import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../redux/reducer";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { Redirect } from "react-router";

const LoginPage = (props) => {
  //Initializing states for respective values
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const [emailErrorValid, setEmailErrorValid] = useState(false);
  const [passwordErrorValid, setPasswordErrorValid] = useState(false);
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };

  let { isLoginSuccess, loginError } = props;

  function handleSubmit(e) {
    e.preventDefault();
    //Email and Password Validations for form fields.
    setEmailValid("");
    setEmailErrorValid(false);
    setPasswordValid("");
    setPasswordErrorValid(false);
    if (!userName) {
      setEmailValid("Email Address is Required");
      setEmailErrorValid(true);
    } else if (!userName.includes("@")) {
      setEmailValid("Email Address is Not Valid");
      setEmailErrorValid(true);
    }
    if (!password) {
      setPasswordValid("Password is Required");
      setPasswordErrorValid(true);
    }
    // Dispatching the props to the reducer.
    props.login(userName, password);
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Typography>User Login</Typography>
        </Grid>
        <Grid container direction={"column"} spacing={2}>
          <Grid item>
            <TextField
              label="Username"
              variant="outlined"
              placeholder="Username"
              value={userName}
              error={emailErrorValid}
              helperText={emailValid}
              fullWidth
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              variant="outlined"
              placeholder="Password"
              type="password"
              value={password}
              error={passwordErrorValid}
              helperText={passwordValid}
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Login
            </Button>
            {loginError && !emailErrorValid && !passwordErrorValid && (
              <div>{loginError.message}</div>
            )}
          </Grid>
        </Grid>
      </Paper>
      {isLoginSuccess && <Redirect to="/EmployeeList" />}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isLoginSuccess: state.isLoginSuccess,
  loginError: state.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
