import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Notes.css"

export const Note = () => {
    const [, setNote] = useState([])
    const [notes, setRookie] = useState([])

    const { rookieId } = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/notes/${rookieId}`)
                .then(response => response.json())
                .then((noteData) => {
                    setNote(noteData)
                })
        },
        [rookieId]
    )

    useEffect(
        () => {
            return fetch(`http://localhost:8088/notes?_expand=rookie`)
                .then(response => response.json())
                .then((data) => {
                    setRookie(data)
                })
        }, []
    )

    return (
        <>
            {
                notes.map(
                    (note) => {
                        return <div key={`note--${note.id}`}>
                            <h2>Notes on {note.rookie.name} </h2>
                            <li>{note.note}</li>
                        </div>
                    }
                )
            }
        </>
    )
}
