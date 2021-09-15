import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { getCurrentUser } from "../APIManager";

export const NoteForm = () => {
    const [note, updateNote] = useState("");
    const history = useHistory()
    const currentUser = getCurrentUser()

    const { rookieId } = useParams()

    const submitNote = (event) => {
        event.preventDefault()


        const newNote = {
            userId: parseInt(currentUser),
            rookieId: parseInt(rookieId),
            note: note
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }

        return fetch("http://localhost:8088/notes?_expand=rookie", fetchOption)
            .then(() => {
                history.push(`/rookies/${rookieId}`)
            })
    }

    return (
        <form className="noteForm">
            <h2 className="noteForm__title">Note</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Note:</label>
                    <input
                        onChange={
                            (event) => {
                                updateNote(event.target.value)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Notes on rookie"
                    />
                </div>
            </fieldset>
            <button onClick={submitNote} className="btn btn-primary">
                Save Note
            </button>
        </form>
    )
}