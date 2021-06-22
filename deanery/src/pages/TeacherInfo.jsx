import React from "react";
import {useParams} from "react-router";
import {Grid} from "@material-ui/core";

export const TeacherInfo = ({infoList}) => {
  const {id} = useParams()

  const info = infoList.map(e => {
    console.log(e._id, id)
    if(e._id === id){
      return e
    }
  }).filter(e => e !== undefined)[0]
  return( <Grid container xs={7}><div style={{
    width: "100%"
  }}>
    <h1>Информация о Преподавателе</h1>
    <h3>Имя:</h3> <span>{info?.name}</span>
    <h3>Фамилия:</h3> <span>{info?.surname}</span>
    <h3>Отчество:</h3> <span>{info?.patronymic}</span>
  </div></Grid> );
};
