import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCurrentUser } from "../APIManager";
// import Josh from "./images/Josh.png"
import elijahMoore from "./images/elijahMoore.png"
import jChase from "./images/jChase.webp"
import mJones from "./images/mJones.webp"
import nHarris from "./images/nHarris.webp"
import dSmith from "./images/dSmith.webp"
import tTremble from "./images/tTremble.webp"
import mParsons from "./images/mParsons.webp"
import jWaddle from "./images/jWaddle.webp"
import kPitts from "./images/kPitts.webp"
import jFields from "./images/jFields.webp"
import aVeraT from "./images/aVeraT.webp"
import cBarmore from "./images/cBarmore.webp"
import kPaye from "./images/kPaye.webp"
import kToney from "./images/kToney.webp"
import pSewell from "./images/pSewell.webp"
import pSurtain from "./images/pSurtain.webp"
import pTurner from "./images/pTurner.webp"
import tEtienne from "./images/tEtienne.webp"
import tLawrence from "./images/tLawrence.webp"
import tLance from "./images/tLance.webp"
import tMarshall from "./images/tMarshall.webp"
import zWilson from "./images/zWilson.webp"
import rMoore from "./images/rMoore.webp"
import nCollins from "./images/nCollins.webp"
import jWilliams from "./images/jWilliams.webp"
import tMoehrig from "./images/tMoehrig.webp"
import aRodgers from "./images/aRodgers.webp"

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

    // renderSwitch(rookie.name) 
    //     switch(rookie.name) {
    //       case "Elijah Moore":
    //         return <img className="rookie--photo" alt="" src={elijahMoore} />;
    //       default:
    //         return 'foo';
    //     }
    //   }


    return (
        <>
            <div id="modal" className="modal">
                <div className="modal__header">
                    <h2>Rookie Details</h2>
                </div>
                <section className="rookie--elk">
                    <h3 className="rookie__name">{rookie.name}</h3>
                    <div className="rookie--emu">
                        <div className="rookie__photo">
                            {rookie.name === "Elijah Moore" ? <img className="rookie--photo" alt="" src={elijahMoore} />
                                : rookie.name === "Mac Jones" ? <img className="rookie--photo" alt="" src={mJones} />
                                    : rookie.name === "Rondale Moore" ? <img className="rookie--photo" alt="" src={rMoore} />
                                        : rookie.name === "Trevor Lawrence" ? <img className="rookie--photo" alt="" src={tLawrence} />
                                            : rookie.name === "Kyle Pitts" ? <img className="rookie--photo" alt="" src={kPitts} />
                                                : rookie.name === "DeVonta Smith" ? <img className="rookie--photo" alt="" src={dSmith} />
                                                    : rookie.name === "Ja'Marr Chase" ? <img className="rookie--photo" alt="" src={jChase} />
                                                        : rookie.name === "Jaylen Waddle" ? <img className="rookie--photo" alt="" src={jWaddle} />
                                                            : rookie.name === "Travis Etienne" ? <img className="rookie--photo" alt="" src={tEtienne} />
                                                                : rookie.name === "Najee Harris" ? <img className="rookie--photo" alt="" src={nHarris} />
                                                                    : rookie.name === "Zach Wilson" ? <img className="rookie--photo" alt="" src={zWilson} />
                                                                        : rookie.name === "Justin Fields" ? <img className="rookie--photo" alt="" src={jFields} />
                                                                            : rookie.name === "Trey Lance" ? <img className="rookie--photo" alt="" src={tLance} />
                                                                                : rookie.name === "Javonte Williams" ? <img className="rookie--photo" alt="" src={jWilliams} />
                                                                                    : rookie.name === "Nico Collins" ? <img className="rookie--photo" alt="" src={nCollins} />
                                                                                        : rookie.name === "Amari Rodgers" ? <img className="rookie--photo" alt="" src={aRodgers} />
                                                                                            : rookie.name === "Kadarius Toney" ? <img className="rookie--photo" alt="" src={kToney} />
                                                                                                : rookie.name === "Tommy Tremble" ? <img className="rookie--photo" alt="" src={tTremble} />
                                                                                                    : rookie.name === "Micah Parsons" ? <img className="rookie--photo" alt="" src={mParsons} />
                                                                                                        : rookie.name === "Patrick Surtain II" ? <img className="rookie--photo" alt="" src={pSurtain} />
                                                                                                            : rookie.name === "Penei Sewell" ? <img className="rookie--photo" alt="" src={pSewell} />
                                                                                                                : rookie.name === "Christian Barmore" ? <img className="rookie--photo" alt="" src={cBarmore} />
                                                                                                                    : rookie.name === "Alijah Vera-Tucker" ? <img className="rookie--photo" alt="" src={aVeraT} />
                                                                                                                        : rookie.name === "Payton Turner" ? <img className="rookie--photo" alt="" src={pTurner} />
                                                                                                                            : rookie.name === "Trevon Moehrig" ? <img className="rookie--photo" alt="" src={tMoehrig} />
                                                                                                                                : rookie.name === "Terrace Marshall Jr." ? <img className="rookie--photo" alt="" src={tMarshall} />
                                                                                                                                    : rookie.name === "Kwity Paye" ? <img className="rookie--photo" alt="" src={kPaye} />
                                                                                                                                        :
                                                                                                                                        <div></div>}


                        </div>
                        <div className="rookie__age">Age: {rookie.age} </div>
                        <div className="rookie__height">Height: {rookie.height} </div>
                        <div className="rookie__weight">Weight: {rookie.weight} </div>
                        <div className="rookie__team">Team: {rookie.team} </div>
                        <div className="rookie__position">Position: {rookie.position} </div>
                        <div className="rookie__prospectGrade">Prospect Grade: {rookie.prospectGrade} </div>
                        <div className="rookie__fortyTime">40 Time: {rookie.fortyTime} </div>
                    </div>
                </section>
                <div className="rookie__position__swap">
                    {rookie.position === "QB" ? <div className="rookie__qb__stats">
                        <table>
                            <tr>
                                <th>Season</th>
                                <th>Passing Yards</th>
                                <th>Passing TDs</th>
                                <th>Completion %</th>
                                <th>Y/A</th>
                                <th>INTs</th>
                            </tr>
                            <tr>
                                <td>2020</td>
                                <td>{rookie.passingYards}</td>
                                <td>{rookie.passingTds}</td>
                                <td>{rookie.completionPct}</td>
                                <td>{rookie.ya}</td>
                                <td>{rookie.interceptions}</td>
                            </tr>
                        </table> </div> : rookie.position === "RB" ? <div className="rookie__rb__stats">
                            <table>
                                <tr>
                                    <th>Season</th>
                                    <th>Rushing Yards</th>
                                    <th>Rushing TDs</th>
                                    <th>Rushing Attempts</th>
                                </tr>
                                <tr>
                                    <td>2020</td>
                                    <td>{rookie.rushingYards}</td>
                                    <td>{rookie.rushingTds}</td>
                                    <td>{rookie.rushAtt}</td>
                                </tr>
                            </table> </div> : rookie.position === "WR" ? <div className="rookie__wr__stats">
                                <table>
                                    <tr>
                                        <th>Season</th>
                                        <th>Receiving Yards</th>
                                        <th>Receiving TDs</th>
                                        <th>Receptions</th>
                                    </tr>
                                    <tr>
                                        <td>2020</td>
                                        <td>{rookie.receivingYards}</td>
                                        <td>{rookie.receivingTds}</td>
                                        <td>{rookie.receptions}</td>
                                    </tr>
                                </table> </div> : rookie.position === "TE" ? <div className="rookie__te__stats">
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
                <div className="rookie__note">
                    <button onClick={() => history.push(`/note/create/note/${rookie.id}`)}>Create Note</button>
                </div>

                <section className="rookie__notes">
                    <h4 className="rookie__notes__header">Notes:</h4>
                    <div className="rookie__note__show note--show">
                        {/* <h3>Notes on {rookie.name}</h3> */}
                        {
                            notes.map(
                                (note) => {
                                    if (note.rookieId === rookie.id && note.userId === parseInt(currentUser)) {
                                        return <div className="note--scroll" key={`note--${note.id}`}>
                                            <div className="">
                                                <li >{note.note}</li>
                                                <button onClick={() => history.push(`/notes/edit/note/${note.id}`)}> Edit </button>
                                                <button onClick={() => { deleteNote(note.id) }}> Delete </button>
                                            </div>
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