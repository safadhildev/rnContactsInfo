export const actions = {
  CONTACTS: {
    REQUEST: 'CONTACTS_REQUEST',
    SUCCESS: 'CONTACTS_SUCCESS',
    ERROR: 'CONTACTS_ERROR',
  },
  RESET: 'CONTACTS_RESET',
};

export const contactsReset = () => ({
  type: actions.RESET,
});

export const contactsRequest = data => {
  return {
    type: actions.CONTACTS.REQUEST,
    payload: data,
  };
};

export const contactsSuccess = data => ({
  type: actions.CONTACTS.SUCCESS,
  payload: data,
});
