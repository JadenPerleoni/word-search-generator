import React from "react";

export default function Word(props) {
  return (
    <div style={{padding: '20px'}}>
      <h3 style={{ textDecoration: props.style }}>{props.word}</h3>
      
    </div>
  );
}
