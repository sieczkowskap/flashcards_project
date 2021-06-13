import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from "react";
import Navbar from "./components/Navbar";

function App() {
//
//     const [flashcards, setFlashcards] = useState([]);
//     const initialCount = 1;
//     const [count, setCount] = useState(initialCount);
//     const initialSide = 0;
//     const [side, setSide] = useState(initialSide);
//
//     useEffect(() => {
//         axios.get("api/flashcard/all")
//             .then(res => {
//                 setFlashcards(res.data);
//             })
//             .catch(console.log("error"))
//     }, [])
//
//     // const postList = posts.map( (post) => {
//     //     return (
//     //         <div>
//     //             <ul>
//     //                 <li key={post.id}>{post.title}</li>
//     //             </ul></div>
//     //     )
//     // } )
//
//
//     // const ite = flashcards.map((p) => {
//     //
//     //     return (
//     //         <div>
//     //             <div className="ui divided items">
//     //                 <div className="ui card centered">
//     //                     <div className="top centered content">
//     //                         <div className="header"> {p.id}</div>
//     //                         <div className="description"> {p.answer} </div>
//     //                     </div>
//     //                 </div>
//     //
//     //             </div>
//     //         </div>
//     //     )
//     // });
//
//
//     const question = flashcards.map(function (flashcard) {
//         let text = '';
//         if (flashcard.id === count) {
//             if (side === 0)
//                 text = flashcard.question;
//             if (side === 1)
//                 text = flashcard.answer;
//         }
//         return text;
//     })
//
//     const next = () => {
//         if (count < flashcards.length)
//             setCount(prevCount => prevCount + 1);
//         if (count === flashcards.length)
//             setCount(initialCount);
//         setSide(0);
//     }
//
//     const flip = () => {
//         if (side === 0)
//             setSide(1);
//         if (side === 1)
//             setSide(0);
//
//     }
//
//     return (
//         <div className="ui segment">
//             <div>
//                 <div className="ui divided items">
//                     <div className="ui card centered">
//                         <div className="top centered content">
//                             {/*<div className="header"> {flashcards[count].map( (p) => {*/}
//                             {/*    return (p.id)*/}
//                             {/*})} </div>*/}
//                             {/*<div className="description"> {Object.keys(flashcards.).map(itemKey => {*/}
//                             {/*    return (*/}
//                             {/*        <tr key={itemKey}>*/}
//                             {/*            <td>{itemKey}</td>*/}
//                             {/*            /!*<td>{ flashcards[1][itemKey]}</td>*!/*/}
//                             {/*        </tr>*/}
//                             {/*    )})} </div>*/}
//                             <div className="description"> {count} </div>
//                             <div className="description"> {question} </div>
//                         </div>
//                         <div className="ui button" onClick={next}>Next</div>
//                         <div className="ui button" onClick={flip}>Flip</div>
//                     </div>
//
//                 </div>
//             </div>
//             {/*{ite}*/}
//         </div>
//     )
//
//
// }

    return (
        <div>
            <Router>
                <Navbar>
                </Navbar>
                <Switch>
                    <Redirect to='/'></Redirect>
                </Switch>
            </Router>
        </div>
    )
}
export default App;

