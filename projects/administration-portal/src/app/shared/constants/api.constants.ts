export const AUTH_URL = "auth";
export const ORDER_URL = "order"
export const CONFECTION_URL = "confection"

export const endpoints = {
  authentication: {
    logIn: `${AUTH_URL}/logIn`,
    refreshToken: `${AUTH_URL}/refreshToken`
  },
  order: {
    getOrders: `${ORDER_URL}`,
  },
  confection: {
    getConfections: `${CONFECTION_URL}`,
    getConfection: `${CONFECTION_URL}/${'id'}`,
    saveConfection: `${CONFECTION_URL}`,
    updateConfection: `${CONFECTION_URL}`
  }
}