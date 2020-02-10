import axios from 'axios';

export const getAll = async () => {
  const url = `http://localhost:3001/v1/gps-data`

  const { data } = await axios.get(url)

  return data
}

export default {
  getAll
}
