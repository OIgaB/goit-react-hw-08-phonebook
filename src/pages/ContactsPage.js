import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "redux/contactsOperations";
import { getContacts, getFilter } from "../redux/selectors";
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Loader } from '../components/Loader/Loader';
import { Container, SubTitle, AlertMessage } from "../components/styled";


const ContactsPage = () => {
  const { items: contacts, isLoading, error } = useSelector(getContacts); // items - масив об'єктів зі стору
  const filter = useSelector(getFilter); // рядок зі стору/
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContactsThunk())  //запит на бекенд за контактами та їх сортування за алфавітом
  }, [dispatch]);

// Функція, яка шукає співпадіння введеного в фільтр імені з іменами об'єктів масиву, який в state
// повертає новий масив знайдених об'єктів (якщо фільтр в state пустий, то новий масив контактів не створиться, 
// а з ф-ції повернеться масив контактів, що в state)
  const filteredContacts = useMemo(() => { // для важких обчислень/фільтрацій, щоб не було перерендеру
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) 
  }, [contacts, filter]);

    return (
        <Container>
            <ContactForm /> 
            <SubTitle>Contacts</SubTitle>
            <Filter />

            {error && <h2>{error}</h2>}   {/* Наприклад, Request failed with status code 401 - Missing header with authorization token.*/}
            {isLoading && <Loader/>} 
            {filteredContacts.length !== 0 && <ContactList />}
            {filteredContacts.length === 0 && <AlertMessage>There are no available contacts. Add some.</AlertMessage>}  
        </Container>
    );
  }

  export default ContactsPage;