import PropTypes from 'prop-types'

import {useDispatch} from 'react-redux'



const Contact = ({contacts, onDelete}) => {
    const dispatch = useDispatch();
    return (<div>{contacts.map(({id, name, phone}) => <div key = {id}><li>{ name}:{phone}</li>
    <button type="button" onClick ={() => onDelete(id)}>Delete</button></div>)} </div>)
}

export default  Contact



Contact.propTypes = {
    contacts:PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
        }))}