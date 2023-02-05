import { useSelector } from 'react-redux';
import { getFilterList } from 'redux/selectors';
import Contact from 'components/ContactList/Contact/Contact';
import { List } from './ContactList.styled';

export default function ContactList() {
  const filterList = useSelector(getFilterList);
  return (
    <List>
      {filterList.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}
