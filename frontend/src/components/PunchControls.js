import React,{useState} from "react";
import {punchAction} from "../api";

export default function PunchControls({user,refresh}) {

const [project,setProject] = useState("");
const [notes,setNotes] = useState("");
const [mode,setMode] = useState("auto");
const [manualTime,setManualTime] = useState("");

const send = async(type)=>{

let time = mode==="auto" ? new Date() : manualTime;

await punchAction({
user,
type,
project,
notes,
time
});

refresh();

}

return (

<div className="card">

<h3>Add Details</h3>

<input
placeholder="Project Code"
onChange={(e)=>setProject(e.target.value)}
/>

<textarea
placeholder="Notes"
onChange={(e)=>setNotes(e.target.value)}
/>

<div>

<label>
<input
type="radio"
checked={mode==="auto"}
onChange={()=>setMode("auto")}
/>
Auto Time
</label>

<label>
<input
type="radio"
checked={mode==="manual"}
onChange={()=>setMode("manual")}
/>
Manual Time
</label>

</div>

{mode==="manual" && (

<input
type="datetime-local"
onChange={(e)=>setManualTime(e.target.value)}
/>

)}

<div>

<button onClick={()=>send("Punch In")}>Punch In</button>

<button onClick={()=>send("Punch Out")}>Punch Out</button>

<button onClick={()=>send("Start Break")}>Start Break</button>

</div>

</div>

);

}