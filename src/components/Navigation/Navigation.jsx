import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
      <nav>
        <ul className={css.headerList}>
          <li className={css.headerListItem}>
            <Link className={css.headerLink} to="/">
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li className={css.headerListItem}>
              <Link className={css.headerLink} to="/contacts">
                Contacts
              </Link>
            </li>
          )}
        </ul>
      </nav>
  );
};
