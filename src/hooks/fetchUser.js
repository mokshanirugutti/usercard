
import axios from 'axios';

export default async function fetchUser() {
    const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
    return response.data.results;
}
