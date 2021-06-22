import React from "react";
import {useParams} from "react-router";
import {Grid} from "@material-ui/core";

export const SpecializationInfo = ({infoList}) => {
  const {id} = useParams()

  const info = infoList.map(e => {
    console.log(e._id, id)
    if(e._id === id){
      return e
    }
  }).filter(e => e !== undefined)[0]
  return( <Grid container xs={7}>
    <div style={{
      width: "100%"
    }}>
      <h1>Информация о Специальности</h1>
      <h3>Название:</h3> <span>{info?.name}</span>
      <h3>Код специальности:</h3> <span>{info?.code}</span>
    </div>
  </Grid> );
};
