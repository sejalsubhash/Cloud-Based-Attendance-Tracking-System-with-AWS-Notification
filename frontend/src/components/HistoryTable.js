import React from "react";

export default function HistoryTable({entries}) {

return (

<table>

<thead>

<tr>
<th>User</th>
<th>Type</th>
<th>Time</th>
<th>Project</th>
<th>Notes</th>
</tr>

</thead>

<tbody>

{entries.map((e,i)=>(

<tr key={i}>

<td>{e.user}</td>
<td>{e.type}</td>
<td>{new Date(e.time).toLocaleString()}</td>
<td>{e.project}</td>
<td>{e.notes}</td>

</tr>

))}

</tbody>

</table>

);

}