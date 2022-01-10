import env from './env'

const makeCall = async (
  endpoint,
  method="GET",
  payload = {},
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
) => { 
  return new Promise((resolve, reject) => {
    let params = {method: method};
    if(method!=="GET"){
       params = {
        ...params,
        headers: headers,
        body: JSON.stringify(payload),
      };
      
    } 
    fetch(env.BASE_URL + endpoint, params)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {throw new Error(error)});
        } else {
          throw new Error(`response status is ${response.status}`);
        }
      })
      .catch(error =>console.log(error));
  });
};

export default makeCall;
