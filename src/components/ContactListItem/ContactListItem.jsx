import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ContactListItem.module.css";
import { ReactComponent as Avatar } from "../../assets/images/user-avatar.svg";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact));
  return (
    <li className={css.contactsListItem}>
      <div className={css.avatarContainer} >
        <Avatar className={css.avatar}/>
      </div>
      <h3 className={css.contactName}>{contact.name}</h3>
      <p className={css.contactPhone}>{contact.number}</p>
      <button type="button" className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
