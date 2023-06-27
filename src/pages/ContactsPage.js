import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Container, SubTitle, AlertMessage } from "../components/styled";


const ContactsPage = () => {
  const { items: contacts, loading, error } = useSelector(getContacts); // items - масив об'єктів зі стору
  const filter = useSelector(getFilter); // рядок зі стору
  
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

            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>} 
            {filteredContacts.length !== 0 && <ContactList />}
            {filteredContacts.length === 0 && <AlertMessage>There is no contact matching your request.</AlertMessage>} 
        </Container>
    );
  }

  export default ContactsPage;