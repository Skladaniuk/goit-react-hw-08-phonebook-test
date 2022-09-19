import  { useState } from 'react';
import {useCreateContactMutation, useGetContactByNameQuery} from '../../redux/contactApi'
import css from './Form.module.css'
export  default function Form () {
  const [createContact] = useCreateContactMutation()
  const contactsList = useGetContactByNameQuery().data;
 

    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
    
    const handlerNameChange = (event) =>{
      setName(event.target.value)
    }
    
    
    const handlerNumberChange = (event) =>{
      setNumber(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
  

        for (const contact of contactsList){
          if(contact.name === name){
            alert(`${contact.name} is already in contacts`)
            return
          }
        }
        createContact({name, number})
     
          reset();
     }
      
      
      
      const  reset = () => {
        setName('');
        setNumber('');
       }
      


    return (
      <form onSubmit={handleSubmit}>
     
          <label    className={css.label} >
            Name
            <input
       
        type="text"
        name="name"
        value = {name}
        onChange = {handlerNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
  
  </label>
  
  <label   className={css.label} >
      Number
  <input
    
    type="tel"
    name="number"
    value = {number}
    onChange = {handlerNumberChange}
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
  />
  </label>
      <button type='submit' className={css.btn}>
      Add contact
      </button>
         
        </form> )
  }
    









