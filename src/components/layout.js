import React from "react"
import { Link } from "gatsby"
import * as layoutStyles from "./layout.module.css"
import Header from "./header"


export default function Layout(props) {
  return (
    <div>
    <div className={layoutStyles.topmenu}>
    <ul>
    <li><Link to = '/index/'><Header headerText="polygen" /></Link></li>
    <li><Link to = '/drawing/'><p>Drawing</p></Link></li>
    <li><Link to = '/python/'><p>Python</p></Link></li>
    <li><Link to = '/link/'><p>Link</p></Link></li>
    </ul>
    </div>
    <div className={layoutStyles.children}>
      {props.children}
    </div>
    </div>
  )
}
