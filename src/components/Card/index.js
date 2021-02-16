import React from "react";
import CardBttn from "../../components/CardBttn";
import "./style.css";

export default function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none",
        width: "325px", height: "325px"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBttn
        onClick={props.handleThumbsUp}><i className="fa fa-thumbs-up" data-value="thumbsUp" /></CardBttn>
      <CardBttn
        onClick={props.handleThumbsDown}><i className="fa fa-thumbs-down" data-value="thumbsDown" /></CardBttn>
    </div>
  );
}
