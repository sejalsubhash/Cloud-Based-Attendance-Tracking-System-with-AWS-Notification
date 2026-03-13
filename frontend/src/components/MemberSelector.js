import React from "react";

const members = ["Pawar","Rahul","Amit","Sneha","Priya"];

export default function MemberSelector({setUser}) {

return (

<div>

<h3>Select Team Member</h3>

<select onChange={(e)=>setUser(e.target.value)}>

<option>Select Member</option>

{members.map((m)=>(
<option key={m} value={m}>{m}</option>
))}

</select>

</div>

);

}