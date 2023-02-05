import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/ContactList/ContactList';
import { Container, Header, Message, Title, Wrap } from 'components/App.styled';

export const ContactEditor = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <Header>
        <h1>YOUR PHONE BOOK</h1>
      </Header>
      <Wrap>
        <Title>Add new contact</Title>
        <ContactForm />
        <Title>Contacts</Title>
        {contacts.length > 0 && <Filter />}
        {isLoading && !error && <Loader />}
        {!isLoading && !error && contacts.length === 0 && (
          <Message>There is not any contacts</Message>
        )}
        <ContactList />
      </Wrap>
    </Container>
  );
};
