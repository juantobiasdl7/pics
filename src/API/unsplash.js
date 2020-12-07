import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID uSi7TB3da1KH0X157MkRtedCnl2Nc4varb_Naja8VCk'
    }
});