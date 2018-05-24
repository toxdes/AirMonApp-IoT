import { config } from './dbconstants';
import firebase from 'firebase';
import axios from 'axios';
import {token} from './api';

String.prototype.capitalize = function() {
    if(this == ""){
        return this;
    }
    return this.charAt(0).toUpperCase() + this.slice(1);
}
firebase.initializeApp(config);
axios.defaults.headers.common['X-Auth-Token'] = `${token}`;
