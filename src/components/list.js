import React from "react";
import { FaEject } from "react-icons/fa";

function List(props) {
  function handleClick(){
    props.onDelete(props.id);
  }
  return (

    <div className="list">

      <h2>{props.activity} </h2>
      <p>{props.amount}</p>
      <button onClick={handleClick} className="btn-2"><FaEject /></button>

    </div>

  );
}
export default List;
