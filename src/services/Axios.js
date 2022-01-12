import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import Bitrix from 'bitrix-rest-api';
import $ from "jquery";


function Axios() {
    const [advice, setAdvice] = useState([]);
   // console.log(advice);

var sendInfo = {
  // ID: 117,
  TITLE: "Test",
  STAGE_ID: "NEW",
  OPPORTUNITY: "123423,55"
};

const bxMethodFIELDS = "crm.deal.fields";

const bxMethodGET = "crm.deal.get?id=117";

const bxMethodDEL = "crm.deal.delete?id=143";

const bxMethodADD = `
crm.deal.add
?fields[TITLE]=${sendInfo.TITLE}
&fields[STAGE_ID]=${sendInfo.STAGE_ID}
&fields[OPPORTUNITY]=${sendInfo.OPPORTUNITY}
`;

const bxMethodUPD = `
crm.deal.update
?ID=143
&fields[TITLE]=${sendInfo.TITLE}
&fields[STAGE_ID]=${sendInfo.STAGE_ID}
&fields[OPPORTUNITY]=${sendInfo.OPPORTUNITY}
&fields[COMMENTS]=${sendInfo.COMMENTS}
`;

const url = `https://dev-breakthrough.cmalliance.org/rest/33/h54ao1kqamt0x0ij/${bxMethodADD}`;     
 
 const axiosInstance = {
        baseURL: 'https://dev-breakthrough.cmalliance.org/rest/33/h54ao1kqamt0x0ij',
        timeout: 5000,
        method: get,
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
        }
    }
    return axiosInstance; 
 }

 const axios_instance = axios.create(axiosInstance);
 return axios_instance;

export default Axios;

