import {actions} from '../actions/Contacts';
import data from '../../data.json';

const initialState = {
  success: false,
  loading: false,
  data: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CONTACTS.REQUEST:
      console.log({action});
      return {
        ...state,
        loading: true,
        data,
      };
    case actions.CONTACTS.UPDATE:
      console.log(action);
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    case actions.RESET:
      return {...initialState};
    default:
      return state;
  }
};

export default contactsReducer;
