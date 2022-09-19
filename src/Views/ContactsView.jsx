import Form from '../components/Form/Form';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {useGetContactByNameQuery} from '../redux/contactApi'



export const ContactsView = () =>{

    return(
        <div>
      <h1>Phonebook</h1>
      <Form/>
       <h2>Contacts</h2>
        <Filter/>     
     <ContactList/> 
     </div>
     
    )
}