import {Authenticator} from './actions/auth';
export const re_auth = () => {
    const credential = JSON.parse(localStorage.getItem('credential'));

    Authenticator(credential).then((res) => {
        if(!res.error)
        {
            return true;
        }
        return false;
    })

    
    //Authenticator()
}