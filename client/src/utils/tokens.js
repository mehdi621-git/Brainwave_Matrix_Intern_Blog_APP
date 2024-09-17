

export const getTokens = ()=>{
    const token = sessionStorage.getItem('accessToken');
    console.log(token)
    return token
}