import React from 'react';
import Form from './Form/Form';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';





export default function App () {
 

  return (
    <div> 
    <h1>Phonebook</h1>
    <Form></Form>                                                                                          
    <h2>Contacts</h2>
      <Filter></Filter>
    <ContactList> </ContactList>
    </div>
   
    )


  }