import axios from 'axios'
export const getImages = async () => {
        const data = await axios.get('localhost:3001/img');
        console.log(data)
        return data ;
    }
    
  