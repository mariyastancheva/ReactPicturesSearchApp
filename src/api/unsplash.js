import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 7bc6974dc7b891b5fd8f23e1d6dbf4ec2feb04c3972b0ca095cc69f2c3bbee41'
    }
})