import React from 'react'
import { PREFIX_NEW_SITE } from "../../constants";

export default class extends React.Component {
  static async getInitialProps({ query, res }) {
    if (res) {
      res.writeHead(301, {
        Location: PREFIX_NEW_SITE
      })
      res.end()
    }
    return {}
  }
}