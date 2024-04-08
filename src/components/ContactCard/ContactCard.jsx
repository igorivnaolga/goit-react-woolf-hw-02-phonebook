import { Item } from './ContactCard.styled';
const ContactCard = ({ id, name, number }) => {
  return (
    <Item key={id}>
      <span>{name}:</span>
      <span>{number}</span>
    </Item>
  );
};

export default ContactCard;
