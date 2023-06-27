import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <strong>Definition:</strong> {props.meaning.definition}
      <br />
      <Example example={props.meaning.example} />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
