class Request {

    static get( url: string ){

        return fetch( url ).then(response => response.json());

    }

}

export default Request;