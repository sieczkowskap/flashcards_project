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
const initial = " ";
    const [question1, setQuestion1] = useState(initial);
    const [question2, setQuestion2] = useState(initial);
    const [question3, setQuestion3] = useState(initial);
    const [answer1, setAnswer1] = useState(initial);
    const [answer2, setAnswer2] = useState(initial);
    const [answer3, setAnswer3] = useState(initial);
    const [category, setCategory] = useState(initial);
    const [name, setName] = useState(initial);
    const [flashcards, setFlashcards] = useState([]);
    var flash = [];
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
            url: 'api/admin/set',
            data: {
                category: category,
                name: name,
                flashcards: [
                    {
                        question: question1,
                        answer: answer1
                    },
                    {
                        question: question2,
                        answer: answer2
                    },
                    {
                        question: question3,
                        answer: answer3
                    }
                ]
            }
        });

    };

    const onNext  =() => {
        flash.push([question1,  answer1]);
    }

    return (
        <div className="ui segment">
            <form onSubmit={(event) => onSubmit(event)} className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" onChange={(event => setName(event.target.value))}/>
                    <label>Category</label>
                    <input type="text" onChange={(event => setCategory(event.target.value))}/>
                    <label>Front 1</label>
                    <input type="text" onChange={(event => setQuestion1(event.target.value))}/>
                    <label>Back 1 </label>
                    <input type="text" onChange={(event => setAnswer1(event.target.value))}/>
                    <label>Front 2</label>
                    <input type="text" onChange={(event => setQuestion2(event.target.value))}/>
                    <label>Back 2</label>
                    <input type="text" onChange={(event => setAnswer2(event.target.value))}/>
                    <label>Front 3</label>
                    <input type="text" onChange={(event => setQuestion3(event.target.value))}/>
                    <label>Back 3</label>
                    <input type="text" onChange={(event => setAnswer3(event.target.value))}/>
                </div>
                <button type="button" onClick={onNext()} className="btn btn-primary">Add next flashcard</button>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
<div>
    Twoje fiszki:
    {flash}
</div>
        </div>
    );

}


export default Admin;