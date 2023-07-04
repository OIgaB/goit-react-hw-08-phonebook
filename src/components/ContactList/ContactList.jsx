//Рендер списку контактів <ul> та його 1го елемента <li>

import { useMemo } from "react";
import { deleteContactThunk } from '../../redux/contactsOperations';
import { useSelector, useDispatch } from "react-redux"; 
import { getContacts, getFilter } from "../../redux/selectors";
import { ListContainer, Contact, Wrapper, Name, Details, Button } from "./styled";  //Image,


export const ContactList = () => {    // contacts - масив об'єктів 

    const { items: contacts, loading, error } = useSelector(getContacts); // дістаємо дані зі стейта
    const filter = useSelector(getFilter); // рядок зі стору


    const filteredContacts = useMemo(() => { // для важких обчислень/фільтрацій, щоб не було перерендеру
        return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) 
    }, [contacts, filter]);

    const dispatch = useDispatch();
    
    return (
        <>
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}                                  
            {filteredContacts.length > 0 && (
                <ListContainer>  
                    {filteredContacts.map(({ id, name, number }) => (  //phone, email, birthdate, avatar
                        <Contact key={id}>                         
                            <Wrapper>
                                <Name>{name}</Name>
                                <Details>tel: <a href='tel:number'>{number}</a></Details>
                            </Wrapper>
                            {/* <Button type='button' onClick={() => dispatch(updateContactThunk(id))}>Edit</Button> */}
                            <Button type='button' onClick={() => dispatch(deleteContactThunk(id))}>Delete</Button>
                        </Contact>      
                    ))} 
                </ListContainer>   
            )}
        </>
    );
}