import React from "react";
import useState from "react";
import { selectedWord } from "./Letter";

export default function Word(props) {
  // const [found,setFound] = useState();

  console.log(props.style);
  return <div style={{textDecoration: props.style}}>{props.word}</div>;
}
