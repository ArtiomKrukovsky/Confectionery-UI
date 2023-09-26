export const CONFECTION_URL = 'confection';
export const CLIENT_URL = 'client';
export const ORDER_URL = 'order';

export const endpoints = {
    confection: {
      getConfetionMappings: `${CONFECTION_URL}/mappings`,
      getConfetions: `${CONFECTION_URL}`,
      getConfection: `${CONFECTION_URL}/${'id'}`
    },
    client: {
      getClient: `${CLIENT_URL}/${'email'}`,
      createClient: `${CLIENT_URL}`
    },
    order: {
      createOrder: `${ORDER_URL}`
    }
  }