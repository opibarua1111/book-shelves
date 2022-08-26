import { Fragment } from "react";

export default function BookDetails(props) {
  return (
    <Fragment>
      <h1>{props.name}</h1>
      <h1>{props.description}</h1>
    </Fragment>
  );
}
