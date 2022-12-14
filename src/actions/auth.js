import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
export const Authenticator = ( async (credential) => {
    return await axios.post('/auth', credential).then((res) => {
            if(res) {
                setAuthorizationToken(res.data.token);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('credential', JSON.stringify(credential));
                localStorage.setItem('isAuthenticated', true);
            }
            return res;
    }).catch((error) =>{
        return error.response.data;
    })
})


export const AuthLogout = (() => {
    setAuthorizationToken();
    
    localStorage.clear();
    return false;
})

