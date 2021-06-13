import React from 'react';
import {useStyles} from "./theme";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {BrowserRouter, BrowserRouter as Router, Link, Route, Switch  } from 'react-router-dom';
import Flashcards from "./Flashcards";
import MainPage from "./MainPage";
import Admin from "./Admin";

const Navbar = () => {
const logout = () =>{
    return document.cookie = "JSESSIONID= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to='/'>
                    <Typography variant="h6" className={classes.title}>
                        Main page
                    </Typography>
                    </Link>
                    <Link to='/flashcards'>
                    <Typography variant="h6" className={classes.title}>
                        Flashcards
                    </Typography>
                    </Link>
                    <Link to='/admin'>
                    <Typography variant="h6" className={classes.title}>
                        Admin
                    </Typography>
                    </Link>

                        <Button size="medium" color="inherit" variant="contained">
                            <a target="_blank"
                               href="http://localhost:8008/logout"
                            onClick={logout()}>
                                Logout</a>
                        </Button>

                </Toolbar>
            </AppBar>


            <Switch>
                <Route exact path='/flashcards'>
                    <Flashcards></Flashcards>
                </Route>
                <Route exact path='/admin'>
                    <Admin></Admin>
                </Route>
                <Route exact path='/'>
                    <MainPage></MainPage>
                </Route>
            </Switch>
        </div>
    );
};

export default Navbar;