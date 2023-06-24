import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      <p>
        {props.meaning.definition}
        <br />
        <em>{props.meaning.definition.example}</em>
      </p>
    </div>
  );
}
