
export const re_auth = () => {
    const credential = JSON.parse(localStorage.getItem('credential'));

    return credential;
    //Authenticator()
}