import Contact from "components/Contact/Contact";
import {useGetContactByNameQuery, useDeleteContactMutation} from '../../redux/contactApi'
import {useSelector} from 'react-redux'




const ContactList = () => {
    const [deleteContact] = useDeleteContactMutation();


const {data} = useGetContactByNameQuery();

const { filter } = useSelector(state => state.filter);


const getVisibleContact = () =>{
    const normalizedFilter = filter.toLocaleLowerCase();
        const visibleContacts = data.filter(({name}) => name.toLocaleLowerCase().includes(normalizedFilter));
    ;
   return visibleContacts
    
  }



   

    return(
        <div>
            <ul >
             {data && <Contact contacts = { getVisibleContact()} onDelete ={deleteContact}></Contact>}
            </ul>
        </div>
    )
}

 
export default ContactList;