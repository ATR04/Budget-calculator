import React,{useState} from "react";
import List from"./list.js";

function Form(props) {

  const [expenses,setExpenses] = useState({
    act:"",
    amt:""
  });

  function handleChange(event){
    const {name,value} = event.target;
    setExpenses(prevNote =>{
      return {
        ...prevNote,
        [name]:value
      }
    })
  }

  function handleClick(event){
    event.preventDefault();
    setExpenses({
      act:"",
      amt:""
    });
    props.onAdd(expenses);
  }

  return (
    <div className="container"  >
       <form >
      <div className="num">
        <label className="activity"> Activity < /label>
        <input name="act" type = "text" value={expenses.act}
         placeholder = "eg:rent" onChange={handleChange}  / >
      </div>
      <div className="num">
        <label className="amount"> Amount < /label>
        <input name="amt"  type = "number" value={expenses.amt}
        placeholder = "eg:100" onChange={handleChange} / >
        </div>
      <button onClick={handleClick} className="btn-1" > Add < /button >

       </form>

    </div>
  );
}

export default Form;
