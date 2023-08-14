import axios from "axios";
import {GETALL_COMPANIES,ADDNEW_COMPANY} from './type.js';

const url = 'http://localhost:4000/';

export const addNewCompany = ()=> {
    axios.post(url,{DataTransfer
    })
}

export const getAllCompanies = async (dispatch) => {
     try {
        const res = await axios.get(url);
        dispatch({type:GETALL_COMPANIES,payload:res.data});
     } catch (error) {
        console.log(error)
     }
}