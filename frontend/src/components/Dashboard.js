import React from "react";

export default function Dashboard({entries}) {

const total = entries.length;

return (

<div className="card">

<h2>Dashboard Overview</h2>

<p>Entries Logged: {total}</p>

</div>

);

}