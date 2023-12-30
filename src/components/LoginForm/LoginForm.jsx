import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <div className={css.formContainer}>
      <p className={css.title}>Login</p>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required/>
        </div>
        <div className={css.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required/>
        </div>
        <button type="submit" className={css.signBtn}>Sign in</button>
      </form>
      <p className={css.signup}>
        Don't have an account?
        <Link className={css.link} to="/register">
          Sign up
        </Link>
      </p>
    </div>
  );
};
