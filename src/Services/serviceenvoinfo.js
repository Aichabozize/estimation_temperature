import axios from 'axios';
import {BASE_URL} from "../utils/constants";

// export async function setvitesse(){
//     return new Promise((resolve, reject) => {
//         axios
//             .post(`${BASE_URL}`)
//             .then((response) => {
//                 resolve(response);
//             })
//             .catch((err) => reject(err));
//     });
// }
export const 
Info = () => {
    return axios.post(BASE_URL);
    
}