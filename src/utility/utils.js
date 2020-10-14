export const host = process.env.REACT_APP_API_HOSTNAME

export const path = {
  on: `${host}/on`,
  off: `${host}/off`,
  status: `${host}/status`
}
