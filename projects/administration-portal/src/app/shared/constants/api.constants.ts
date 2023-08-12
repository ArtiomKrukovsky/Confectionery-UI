export const AUTH_URL = "auth";
export const ORDER_URL = "order"

export const endpoints = {
    authentication: {
      logIn: `${AUTH_URL}/logIn`
    },
    order: {
      getOrders: `${ORDER_URL}`,
    }
  }