import axios from 'axios';

const url = 'http://localhost:3010/';

async function getUser(config) {
  let user;
  await axios({
    method: config.method,
    url: url + config.route,
    data: config.body,
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  })
  .then((result) => {
    user = result.data;
  })
  return user;
}


export { getUser };



