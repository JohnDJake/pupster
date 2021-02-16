import React from "react";
import CardBttn from "../../components/CardBttn";

export default function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBttn
        onClick={props.handleThumbsUp}
        data-value="pass"
      />
      <CardBttn
        onClick={props.handleThumbsUp}
        data-value="pick"
      />
    </div>
  );
}
