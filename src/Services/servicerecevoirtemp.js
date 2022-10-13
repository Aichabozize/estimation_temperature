import axios from 'axios';
import {BASE_URL} from "../utils/constants";


function getTempaturecable() {
    return axios.get(BASE_URL+'donnee');
}

export const servicerecevoirtemp = {
    getTempaturecable,
};

