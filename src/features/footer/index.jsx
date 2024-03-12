import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer({ left, right }) {

  return (
    <div className="flex flex-row justify-between text-3xl w-3/6 mx-auto">
      <div className="">
        {left ? <Link to={left.url}>{`⇐ ${left.text}`}</Link> : null}
        </div>
      <div className="">
        {right ? <Link to={right.url}>{`${right.text} ⇒`}</Link> : null}
        </div>
    </div>
  )

}