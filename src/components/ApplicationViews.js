import React from "react"
import { Route } from "react-router-dom"
import { EditNote } from "./notes/EditNote"
import { NoteForm } from "./notes/NoteForm"
import { Note } from "./notes/Notes"
import { Rookie } from "./rookies/Rookie"
import { Rookie2 } from "./rookies/Rookie2"
import { RookieList } from "./rookies/RookieList"



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <RookieList />
            </Route>

            <Route exact path="/rookies">
                <RookieList />
            </Route>

            <Route exact path="/rookies/:rookieId(\d+)">
                <Rookie2 />
            </Route>

            <Route exact path="/notes">
                <Note />
            </Route>

            <Route exact path="/notes/edit/note/:noteId(\d+)">
                <EditNote />
            </Route>

            <Route exact path="/note/create/note/:rookieId(\d+)">
                <NoteForm />
            </Route>

            <Route exact path="/notes/:rookieId(\d+)">
                <Note />
            </Route>




        </>
    )
}