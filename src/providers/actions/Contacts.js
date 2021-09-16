export const actions = {
  CONTACTS: {
    REQUEST: 'CONTACTS_REQUEST',
    UPDATE: 'CONTACTS_UPDATE',
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

export const contactsUpdate = data => {
  return {
    type: actions.CONTACTS.UPDATE,
    payload: data,
  };
};
