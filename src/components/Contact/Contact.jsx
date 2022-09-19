import PropTypes from 'prop-types'
import css from './Contact.module.css'
import {useDispatch} from 'react-redux'



const Contact = ({contacts, onDelete}) => {
    const dispatch = useDispatch();
    return (<div>{contacts.map(({id, name, number}) => <div className={css.contact} key = {id}><li>{ name}:{number}</li>
    <button className={css.btn} type="button" onClick ={() => onDelete(id)}>Delete</button></div>)} </div>)
}

export default  Contact



Contact.propTypes = {
    contacts:PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
        }))}