import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer({ left, right }) {
  
  return (
    <div className="flex flex-row text-3xl">
      <div className="flex-start">
        {left ? <Link to={left.url}>{`⇐ ${left.text}`}</Link> : null}
        </div>
      <div className="flex-end">
        {right ? <Link to={right.url}>{`${right.text} ⇒`}</Link> : null}
        </div>
    </div>
  )

}