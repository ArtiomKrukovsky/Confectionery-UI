export const CONFECTION_URL = 'confection';
export const USER_URL = 'user';
export const ORDER_URL = 'order';

export const endpoints = {
    confection: {
      getConfetions: `${CONFECTION_URL}`,
      getConfection: `${CONFECTION_URL}/${'id'}`
    },
    user: {
      getUser: `${USER_URL}/${'email'}`,
      createUser: `${USER_URL}`
    },
    order: {
      createOrder: `${ORDER_URL}`
    }
  }