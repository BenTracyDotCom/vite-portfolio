import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer({ left, right }) {

  return (
    <div className="flex flex-row space-between text-3xl border-2 border-red-500 w-full">
      <div className="">
        {left ? <Link to={left.url}>{`⇐ ${left.text}`}</Link> : null}
        </div>
      <div className="">
        {right ? <Link to={right.url}>{`${right.text} ⇒`}</Link> : null}
        </div>
    </div>
  )

}