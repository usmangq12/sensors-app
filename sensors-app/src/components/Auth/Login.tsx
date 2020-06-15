import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, Grid } from "@material-ui/core";
import { Intro } from "../../shared/Intro";
import { AuthStyles } from "../../styles/Login";
import { UserLogin } from "../../models/User";
import RequestService from "../../services/RequestService";
import {IUserLogin} from "../../models/Auth";

const Login: React.FC = () => {
  const [user, setUser] = useState<UserLogin>({ username: "", password: "" });
  const [error, setError] = useState<boolean>(false);
  const classes = AuthStyles();
  const requestService = new RequestService();
  const history = useHistory();

  const checkLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = user;
    if (username.length === 0 || password.length === 0) {
      setError(true);
      return;
    } else {
      await requestService.getUsersData("users").then((users: UserLogin[]) => {
        const user = users.find(
          (x: UserLogin) => x.username === username && x.password === password
        );
        if (user) history.push('/home');
      });
      
    }
  };

  return (
    <form onSubmit={checkLogin}>
      <Grid container className={classes.FullHeight}>
        <Intro />
        <Grid
          item
          sm={6}
          xs={12}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
          className={classes.Flex}
        >
          <TextField
            value={user.username}
            label="Username/Email"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            error={error && user.username.length < 1}
            helperText={
              error && user.username.length < 1 ? "Username is required" : null
            }
            className={classes.FullWidth}
          />
          <TextField
            value={user.password}
            label="Password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            error={error && user.password.length < 1}
            helperText={
              error && user.password.length < 1 ? "Password is required" : null
            }
            className={classes.FullWidth}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.FullWidth}
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
