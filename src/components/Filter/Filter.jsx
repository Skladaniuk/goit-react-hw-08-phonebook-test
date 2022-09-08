import {filterContact} from '../../redux/contactSlice';
import {useDispatch} from 'react-redux'



const Filter = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <label>
                Find contacts by name
                <input type="text"  onChange = {(event) => dispatch(filterContact(event.target.value))}/>
            </label>
        </div>
    )

}

export default Filter;