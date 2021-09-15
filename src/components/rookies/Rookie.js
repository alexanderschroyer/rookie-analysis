// import React, { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { getCurrentUser } from "../APIManager";
// import Josh from "./Josh.png"
// import "./Rookie.css"

// export const Rookie = () => {
//     const [rookie, setRookie] = useState({})
//     const [notes, setNote] = useState([])
//     const history = useHistory()
//     const currentUser = getCurrentUser()

//     const getRookieNotes = () => {
//         return fetch("http://localhost:8088/notes?_expand=rookie")
//             .then(response => response.json())
//             .then((data) => {
//                 setNote(data)
//             })
//     }

//     const getRookies = () => {
//         return fetch(`http://localhost:8088/rookies/${rookieId}`)
//             .then(response => response.json())
//             .then((data) => {
//                 setRookie(data)
//             })
//     }

//     const { rookieId } = useParams()

//     useEffect(
//         () => {
//             getRookies()
//         },
//         []
//     )

//     useEffect(
//         () => {
//             getRookieNotes()
//         },
//         []
//     )

//     const deleteNote = (id) => {
//         fetch(`http://localhost:8088/notes/${id}`, {
//             method: "DELETE"
//         })
//             .then(() => {
//                 return getRookieNotes()
//             })

//     }

//     return (
//         <>
//             <div id="modal" className="modal">
//                 <h2>Rookie Details</h2>
//                 <section className="rookie">
//                     {/* <div className="rookie__photo"><img alt="Rookie player photo" src={Josh} className="photo--rookie"/></div> */}
//                     <h3 className="rookie__name">{rookie.name}</h3>
//                     <div className="rookie__age">Age: {rookie.age} </div>
//                     <div className="rookie__height">Height: {rookie.height} </div>
//                     <div className="rookie__weight">Weight: {rookie.weight} </div>
//                     <div className="rookie__team">Team: {rookie.team} </div>
//                     <div className="rookie__position">Position: {rookie.position} </div>
//                     <div className="rookie__prospectGrade">Prospect Grade: {rookie.prospectGrade} </div>
//                     <div className="rookie__fortyTime">40 Time: {rookie.fortyTime} </div>
//                 </section>
//                 <div className="rookie__note">
//                     <button onClick={() => history.push(`/note/create/note/${rookie.id}`)}>Create Note</button>
//                 </div>

//                 <section className="rookie__notes">
//                     <h4 className="rookie__notes__header">Notes:</h4>
//                     <div className="rookie__note__show">
//                         {/* <h3>Notes on {rookie.name}</h3> */}
//                         {
//                             notes.map(
//                                 (note) => {
//                                     if (note.rookieId === rookie.id && note.userId === parseInt(currentUser)) {
//                                         return <div key={`note--${note.id}`}>
//                                             <li>{note.note}</li>
//                                             <button onClick={() => history.push(`/notes/edit/note/${note.id}`)}>Edit</button>
//                                             <button onClick={() => { deleteNote(note.id) }}> Delete </button>
//                                         </div>
//                                     } else {

//                                     }
//                                 }
//                             )
//                         }
//                     </div>
//                 </section>
//             </div>
//         </>
//     )

// }