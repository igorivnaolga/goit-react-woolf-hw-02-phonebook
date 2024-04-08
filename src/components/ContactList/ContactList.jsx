import ContactCard from 'components/ContactCard/ContactCard';
import { List } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactCard key={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
