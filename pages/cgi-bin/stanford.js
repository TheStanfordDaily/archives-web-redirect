import React from "react";
import { PREFIX_NEW_SITE } from "../../constants";

// https://stanforddailyarchive.com/cgi-bin/stanford?a=q&hs=1&r=1&results=1&txf=txIN&txq=a&e=-------en-20--1--txt-txIN-------

/*
Home
https://stanforddailyarchive.com/cgi-bin/stanford?a=p&p=home&e=-------en-20--1--txt-txIN-a------

Search
https://stanforddailyarchive.com/cgi-bin/stanford?a=q&e=-------en-20--1--txt-txIN-a------

Calendar
https://stanforddailyarchive.com/cgi-bin/stanford?a=cl&cl=CL2.1893.04&e=-------en-20--1--txt-txIN-a------

Dates (Years)
https://stanforddailyarchive.com/cgi-bin/stanford?a=cl&cl=CL2&e=-------en-20--1--txt-txIN-a------

Issue PDFs
https://stanforddailyarchive.com/cgi-bin/stanford?a=d&d=stanford18940501-01&e=-------en-20--1--txt-txIN-a------

Acknowledgements
https://stanforddailyarchive.com/cgi-bin/stanford?a=p&p=acknowledgements&e=-------en-20--1--txt-txIN-a------


*/

export const getNewUrl = ({query}) => {
  return PREFIX_NEW_SITE;
}

export default class extends React.Component {
    static async getInitialProps({ query, res }) {
      if (res) {
        res.writeHead(301, {
          Location: getNewUrl({query})
        })
        res.end()
      }
      return {}
    }
  }