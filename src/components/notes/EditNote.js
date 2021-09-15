import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export const EditNote = () => {
    const [note, updateNote] = useState({
        note: ""
    })
    const { noteId } = useParams()
    const history = useHistory()


    useEffect(
        () => {
            return fetch(`http://localhost:8088/notes/${noteId}?_expand=rookie`)
                .then(response => response.json())
                .then((data) => {
                     updateNote(data) 
                })
        },
        [noteId]
    )

    const saveNote = (event) => {
        event.preventDefault()
        console.log(event.target)
        const fetchOption = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                note: note.note
            })
        }

        return fetch(`http://localhost:8088/notes/${noteId}`, fetchOption)
            .then(() => { history.push(`/rookies/${note.rookie?.id}`) })
    }

    return (
        <>
            <section className="edit__note">
                <h4>Edit Note</h4>
                <label htmlFor="note">Edit Note:</label>
                <input
                    onChange={
                        (event) => {
                            const copy = { ...note }
                            copy.note = event.target.value
                            updateNote(copy)
                        }
                    }
                    required autoFocus
                    type="text"
                    className="form-control"
                    defaultValue={note.note}
                />
                <button id="" className="btn btn-primary" onClick={saveNote}>Submit Edit</button>
            </section>
        </>
    )

}