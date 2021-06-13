import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState} from "react";
// import {simplify, parse} from 'mathjs';
import {useStyles} from './theme';
import {Button} from "@material-ui/core";
import axios from "axios";

// https://material-ui.com/components/text-fields/

// const useStyles = makeStyles((theme) => ({
// root: {
// display: 'flex',
// flexWrap: 'wrap',
// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
// },
// textField: {
// marginLeft: theme.spacing(4),
// marginRight: theme.spacing(4),
// width: '300px',
// },
// }));

const Admin = () => {

    const classes = useStyles;
const initialQuestion = " ";
const initialAnswer = " ";
    const [question, setQuestion] = useState(initialQuestion);
    const [answer, setAnswer] = useState(initialAnswer);

//     const handleChange = (event) => {
//         setExpression(event.target.value);
//
//         try {
//             const e = parse(String(exp));
//             const simplified = simplify(e).toString();
//             setResult(simplified);
// // console.log(simplify(e).toString())
//             setError(false);
//
//         } catch {
//             setError(true);
//             console.log("error");
//         }
//
//     };

    const onSubmit = (event) => {

        event.preventDefault();
        axios({
            method: 'post',
            url: 'api/flashcard',
            data: {
                question: question,
                answer: answer
            }
        });

    };

    return (
        <div className="ui segment">
            <form onSubmit={(event) => onSubmit(event)} className="ui form">
                <div className="field">
                    <label>Front</label>
                    <input type="text" onChange={(event => setQuestion(event.target.value))}/>
                    <label>Back</label>
                    <input type="text" onChange={(event => setAnswer(event.target.value))}/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>

        </div>
    );

}


export default Admin;