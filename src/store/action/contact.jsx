import * as actionType from './actionType';
import axios from '../../axios-portfolio';

export const transactionStart = () => {
    return {
        type: actionType.TRANS_START
    }
}
export const transactionSuccess = (userName) => {
    return {
        type: actionType.TRANS_SUCCESS,
        name: userName
    }
}
export const transactionFailed = (error) => {
    return {
        type: actionType.TRANS_FAILED,
        error: error
    }
}

export const contactMe = (contactData) => {
    return dispatch => {
        dispatch(transactionStart())
        axios.post('/contact.json',contactData).then((res) => {
            dispatch(transactionSuccess(contactData.name));
        }).catch(error => {
            dispatch(transactionFailed(error))
        })
    }
}