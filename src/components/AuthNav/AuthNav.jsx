import React from "react";
import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.authWrapper}>
      <Link className={css.link} to="/register">
        Register
      </Link>
      <Link className={css.link} to="/login">
        Log In
      </Link>
    </div>
  );
};
