
//Api Notification
export const Api_Notification ={
    loading:{
        title : "Loading...",
        message : "Data is loading"
    },
    success: {
        title : 'success',
        message : 'Data loaded successfully'
    },
    responseFailure :{
        title :'error',
        message :"Error Occur while fetching response from backend"
    },
    requestFailure:{
            title : 'error',
            message : "error occur while parsing data , try again"
    },
    networkError :{
        title :'error',
        message : 'connectivity issue | Check Internet Connectivity'
    }
}
export const service_url={
    //signup:{url : ',method:POST/DELETE... ,params,query}
    up:{url: 'l' , method : "POST"}
}