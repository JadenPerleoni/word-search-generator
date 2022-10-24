import React from "react";
import useState from "react";
import { selectedWord } from "./Letter";

export default function Word(props) {
    // const [found,setFound] = useState();


  return (
    <div
      style={
        props.word === props.selectedWord ? { textDecoration: "line-through" } : {}
      }
    >
      {props.word}
      
    </div>
  );
}
