import {actions} from '../actions/Geocode';

const initialState = {
  success: false,
  loading: false,
  data: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CONTACTS.REQUEST:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case actions.CONTACTS.SUCCESS:
      return {
        ...state,
        success: true,
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
