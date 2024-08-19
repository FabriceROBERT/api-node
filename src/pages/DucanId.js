import React from "react";
import { useParams } from "react-router-dom";

export default function DucanId() {
  const params = useParams();
  console.log(params);
  return <div> bonjour, {params.nom}</div>;
}
