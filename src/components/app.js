import React,{useState} from "react";
import '../index.css';
import Form from "./form.js"
import List from"./list.js"





function App(){

const[arr,newArr]=useState([]);

function change(note){
 newArr(prevNote=>{
   return[...prevNote,note];
 })
}
function deleten(id){
  newArr(prevNote=>{
    return prevNote.filter((note,index)=>{
      return index !== id;
    })
  })
}
return(
  <div>
  <h1>Budget Calculator</h1>
  <Form
   onAdd={change}/>
  {arr.map((item,index)=>{
    return <List
    id={index}
    key={index}
    onDelete={deleten}
    activity={item.act}
    amount={item.amt}
    />
  })}
  <h3>Total expense :
<span>
$ {arr.reduce((acc,curr)=>{
  return(acc+=parseInt(curr.amt))
},0)}
</span>
  </h3>
</div>
);
}
export default App;
