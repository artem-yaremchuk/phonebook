import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <p className={css.title}>Register </p>
      <p className={css.message}>Signup now and get full access to our app. </p>
      <label>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder=""
          required
        />
        <span>Username</span>
      </label>
      <label>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder=""
          required
        />
        <span>Email</span>
      </label>
      <label>
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder=""
          required
        />
        <span>Password</span>
      </label>
      <button type="submit" className={css.submitBtn}>
        Submit
      </button>
      <p className={css.signin}>
        Already have an acount ?
        <Link className={css.link} to="/login">
          Sign In
        </Link>
      </p>
    </form>
  );
};
