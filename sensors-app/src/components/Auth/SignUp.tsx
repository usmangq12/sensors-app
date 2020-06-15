import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { TextField, Button, Grid } from "@material-ui/core";
import { Intro } from "../../shared/Intro"
import { AuthStyles } from "../../styles/Login"
import { UserLogin } from "../../models/User"
import RequestService from "../../services/RequestService";

const SignUp: React.FC = () => {
    const [user, setUser] = useState<UserLogin>({ username: "", password: "" });
    const [error, setError] = useState<boolean>(false);
    const classes = AuthStyles();
    const requestService = new RequestService();
    const history = useHistory();

    const checkSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, password } = user;
        if (username.length === 0 || password.length === 0) {
            setError(true);
            return;
        } else {
            let users: UserLogin[] = [];
            await requestService.getUsersData("users").then((usersList: any) => {
                users = usersList;
            })
            .catch(error => {
                console.log(error)
            });
            const user = await users? users.find(
                ( x: UserLogin) => x.username !== username ): null
            if (!user) {
                const data = {username: username, password: password};
                requestService.addUsersData("users", data);
                history.push('/login');
            }
        }
    };

    return (
        <form onSubmit={checkSignUp}>
            <Grid container className={classes.FullHeight}>
                <Intro />
                <Grid item container sm={6} xs={12} direction={"column"} justify={"center"} alignItems={"center"} className={classes.Flex}>
                    <TextField
                        value={user.username}
                        label="username/Email"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        error={error && user.username.length < 1}
                        helperText={
                            error && user.username.length < 1 ? "username is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <TextField
                        value={user.password}
                        label="password"
                        type="password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        error={error && user.password.length < 1}
                        helperText={
                            error && user.password.length < 1 ? "password is required" : null
                        }
                        className={classes.FullWidth}
                    />
                    <Button type="submit" variant="contained" className={classes.FullWidth}>
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SignUp;
