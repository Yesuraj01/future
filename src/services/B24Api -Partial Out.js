import React, { useEffect, useState } from 'react';
// import { BX24 } from 'bx24';
import axios from 'axios';
 
import Bitrix from 'bitrix-rest-api'
import $ from "jquery";


function B24Api() {
    const [advice, setAdvice] = useState([]);
   // console.log(advice);

var sendInfo = {
  // ID: 117,
  TITLE: "Bala",
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

$.ajax(
  `https://dev-breakthrough.cmalliance.org/rest/33/h54ao1kqamt0x0ij/${bxMethodADD}`,
  {
    method: "POST",
    success: function (data) {
      document.body.innerHTML = data.result;
      console.log(data.result); /* выведет "Текст" */
    }
  }
);
     
    return (
   <></>
    );

}
export default B24Api;

