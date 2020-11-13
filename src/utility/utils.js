export const host = process.env.REACT_APP_API_HOSTNAME

export const path = {
  led1: {
    on: `${host}/on/1`,
    off: `${host}/off/1`,
    status: `${host}/status/1`
  },
  led2: {
    on: `${host}/on/2`,
    off: `${host}/off/2`,
    status: `${host}/status/2`
  },
  log: {
    led: `${host}/log/light`,
    sensor: `${host}/log/sense`
  }
}

export const query = {
    led1: {
      size: 10,
      page: 1,
      order_by: "time",
      order: "desc",
      search: 1
    },
    led2: {
      size: 10,
      page: 1,
      order_by: "time",
      order: "desc",
      search: 2
    },
    sensor: {
      size: 10,
      page: 1,
      order_by: "time",
      order: "asc"
    }
}
