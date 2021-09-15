import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar.js";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./RookieAnalysis.css";

export const RookieAnalysis = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("rookie_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);