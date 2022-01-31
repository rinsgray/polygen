import React from "react"
import { Link } from "gatsby"
export default function Header(props) {
  return <Link to = "/"><h1>{props.headerText}</h1></Link>
}
