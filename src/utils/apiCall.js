import axios from "axios";

/**
    * request funtion is used to do rest API calls
    * @param method Kind of Request Like GET, POST, PUT or DELETE
    * @param endPoint define only the endpoint
    * @param req request of api call
    * @returns contains response from the backend
*/
async function request(method, endPoint, req) {
    const baseUrl = 'http://localhost:4200';

    try {
        const response = await axios({
            method  : method,
            url     : `${baseUrl}/${endPoint}`,
            data    : req,
            headers : {
                Authorization: `Bearer ${sessionStorage.getItem('auth')}`
            }
        })
        return response;
    } catch (err) {
        window.open('/login', '_self');
    }
}

export default request;