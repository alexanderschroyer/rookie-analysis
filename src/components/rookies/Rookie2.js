import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCurrentUser } from "../APIManager";
import Josh from "./Josh.png"
import "./Rookie.css"

export const Rookie2 = () => {
    const [rookie, setRookie] = useState({})
    const [notes, setNote] = useState([])
    const history = useHistory()
    const currentUser = getCurrentUser()

    const getRookieNotes = () => {
        return fetch("http://localhost:8088/notes?_expand=rookie")
            .then(response => response.json())
            .then((data) => {
                setNote(data)
            })
    }

    const getRookies = () => {
        return fetch(`http://localhost:8088/rookies/${rookieId}`)
            .then(response => response.json())
            .then((data) => {
                setRookie(data)
            })
    }

    const { rookieId } = useParams()

    useEffect(
        () => {
            getRookies()
        },
        []
    )

    useEffect(
        () => {
            getRookieNotes()
        },
        []
    )

    const deleteNote = (id) => {
        fetch(`http://localhost:8088/notes/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                return getRookieNotes()
            })

    }

    return (
        <>
            <div id="modal" className="modal">
                <h2>Rookie Details</h2>
                <section className="rookie">
                    {/* <div className="rookie__photo"><img alt="Rookie player photo" src={Josh} className="photo--rookie"/></div> */}
                    <h3 className="rookie__name">{rookie.name}</h3>
                    <div className="rookie__age">Age: {rookie.age} </div>
                    <div className="rookie__height">Height: {rookie.height} </div>
                    <div className="rookie__weight">Weight: {rookie.weight} </div>
                    <div className="rookie__team">Team: {rookie.team} </div>
                    <div className="rookie__position">Position: {rookie.position} </div>
                    <div className="rookie__prospectGrade">Prospect Grade: {rookie.prospectGrade} </div>
                    <div className="rookie__fortyTime">40 Time: {rookie.fortyTime} </div>
                    <div className="rookie__position__swap">
                        {rookie.position === "QB" ? <div className="rookie__qb__stats">
                            <div>Passing Yards: {rookie.passingYards}</div>
                            <div>Passing TDs: {rookie.passingTds}</div>
                            <div>Completion %: {rookie.completionPct}</div>
                            <div>Y/A:{rookie.ya}</div>
                            <div>Interceptions:{rookie.interceptions}</div>
                        </div> : rookie.position === "RB" ? <div className="rookie__rb__stats">
                            <div>Rushing Yards: {rookie.rushingYards}</div>
                            <div>Rushing TDs: {rookie.rushingTds}</div>
                            <div>Rush Attempts: {rookie.rushAtt}</div>
                        </div> : rookie.position === "WR" ? <div className="rookie__wr__stats">
                            <div>Receiving Yards: {rookie.receivingYards}</div>
                            <div>Receiving TDs: {rookie.receivingTds}</div>
                            <div>Receptions: {rookie.receptions}</div>
                        </div> : rookie.position === "TE" ? <div className="rookie__te__stats">
                            <div>Receiving Yards: {rookie.receivingYards}</div>
                            <div>Receiving TDs: {rookie.receivingTds}</div>
                            <div>Receptions: {rookie.receptions}</div>
                        </div> : rookie.position === "LB" ? <div className="rookie__lb__stats">
                            <div>Total Tackles: {rookie.totalTackles}</div>
                            <div>Solo Tackles: {rookie.soloTackles}</div>
                            <div>TFL: {rookie.tfl}</div>
                            <div>Sacks: {rookie.sacks}</div>
                            <div>Interceptions:{rookie.interceptions}</div>
                        </div> : rookie.position === "CB" ? <div className="rookie__cb__stats">
                            <div>Total Tackles: {rookie.totalTackles}</div>
                            <div>Solo Tackles: {rookie.soloTackles}</div>
                            <div>TFL: {rookie.tfl}</div>
                            <div>Sacks: {rookie.sacks}</div>
                            <div>Interceptions:{rookie.interceptions}</div>
                        </div> : rookie.position === "DT" ? <div className="rookie__dt__stats">
                            <div>Total Tackles: {rookie.totalTackles}</div>
                            <div>Solo Tackles: {rookie.soloTackles}</div>
                            <div>TFL: {rookie.tfl}</div>
                            <div>Sacks: {rookie.sacks}</div>
                            <div>Interceptions:{rookie.interceptions}</div>
                        </div> : rookie.position === "SAF" ? <div className="rookie__saf__stats">
                            <div>Total Tackles: {rookie.totalTackles}</div>
                            <div>Solo Tackles: {rookie.soloTackles}</div>
                            <div>TFL: {rookie.tfl}</div>
                            <div>Sacks: {rookie.sacks}</div>
                            <div>Interceptions:{rookie.interceptions}</div>
                        </div> : <div> </div>}
                    </div>
                </section>
                <div className="rookie__note">
                    <button onClick={() => history.push(`/note/create/note/${rookie.id}`)}>Create Note</button>
                </div>

                <section className="rookie__notes">
                    <h4 className="rookie__notes__header">Notes:</h4>
                    <div className="rookie__note__show">
                        {/* <h3>Notes on {rookie.name}</h3> */}
                        {
                            notes.map(
                                (note) => {
                                    if (note.rookieId === rookie.id && note.userId === parseInt(currentUser)) {
                                        return <div key={`note--${note.id}`}>
                                            <li>{note.note}</li>
                                            <button onClick={() => history.push(`/notes/edit/note/${note.id}`)}>Edit</button>
                                            <button onClick={() => { deleteNote(note.id) }}> Delete </button>
                                        </div>
                                    } else {

                                    }
                                }
                            )
                        }
                    </div>
                </section>
            </div>
        </>
    )

}