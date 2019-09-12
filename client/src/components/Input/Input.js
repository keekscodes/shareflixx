import React from "react";
import { MDBInput } from "mdbreact";

const Input = (props) => {
  return (
    <MDBInput label="" background size="sm" type={props.type} value={props.value} onChange={props.onChange}/>
  );
}

export default Input;