import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectItems } from "../../redux/contacts/selectors";
import Notiflix from "notiflix";
import css from "./ContactForm.module.css";
import { ReactComponent as UserLogo } from "../../images/user.svg";
import { ReactComponent as PhoneLogo } from "../../images/phone.svg";

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const [data, setData] = useState({
    name: "",
    number: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (data.name.trim() === "" || data.number.trim() === "") {
      Notiflix.Notify.warning("Fill in the fields");
      return;
    }
    const sameNames = items.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase(),
    );
    if (sameNames) {
      Notiflix.Notify.info(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
    reset();
  };

  const reset = () => {
    setData({ name: "", number: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formFieldName}>
        <label htmlFor="exampleInputName" className={css.formLabel}>
          Name
        </label>
        <div className={css.inputWrap}>
          <input
            type="text"
            name="name"
            className={css.formInput}
            id="exampleInputName"
            value={data.name}
            onChange={handleChange}
            required
          />
          <UserLogo className={css.formInputIcon} />
        </div>
      </div>
      <div className={css.formFieldPhone}>
        <label htmlFor="exampleInputNumber" className={css.formLabel}>
          Phone
        </label>
        <div className={css.inputWrap}>
          <input
            type="tel"
            name="number"
            className={css.formInput}
            id="exampleInputNumber"
            value={data.number}
            onChange={handleChange}
            required
          />
          <PhoneLogo className={css.formInputIcon} />
        </div>
      </div>
      <button type="submit" className={css.formBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
