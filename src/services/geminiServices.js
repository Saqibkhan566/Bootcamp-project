import axios from 'axios';

const getResponse = async (prompt) => {
    try {
        const res = await axios.post('http://localhost:5000/api/gemini', { prompt });
        return res.data;
    } catch (error) {
        return 'Error fetching response';
    }
};

export default { getResponse };