import React,{useState,useEffect} from "react";
import MemberSelector from "./components/MemberSelector";
import PunchControls from "./components/PunchControls";
import HistoryTable from "./components/HistoryTable";
import Dashboard from "./components/Dashboard";
import {getHistory} from "./api";

function App(){

const [user,setUser] = useState("");
const [entries,setEntries] = useState([]);

const load = async()=>{

const res = await getHistory();
setEntries(res.data);

};

useEffect(()=>{
load();
},[]);

return(

<div className="container">

<h1>Punch Clock</h1>

<MemberSelector setUser={setUser}/>

{user && <h2>Welcome {user}</h2>}

<Dashboard entries={entries}/>

{user && <PunchControls user={user} refresh={load}/>}

<HistoryTable entries={entries}/>

</div>

);

}

export default App;