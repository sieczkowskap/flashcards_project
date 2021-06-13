import React from 'react';
import {useStyles} from "./theme";
import {Button} from "@material-ui/core"

const MainPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <div>

                <Button size="medium" color="inherit" variant="contained">
                    <a target="_blank"
                       href="https://en.wikipedia.org/wiki/Flashcard">
                        Learn more about flashcards</a>
                </Button>

            </div>

        </div>

    );
};

export default MainPage;