import React from "react";
import {useParams} from "react-router";
import {Grid} from "@material-ui/core";

export const DistInfo = ({infoList}) => {
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
      <h1>Информация о Дисциплине</h1>
      <h3>Название: <span>{info?.name}</span></h3>
      <h3>Индекс: <span>{info?.index}</span></h3>
      <h3>Количество лекционных часов: <span>{info?.lecturesWatch}</span></h3>
      <h3>Количество практических часов: <span>{info?.practicesWatch}</span></h3>
      <h3>Количество лабораторных часов: <span>{info?.laboratoryWatch}</span></h3>
      <h3>Количество семинарных часо: <span>{info?.seminarsWatch}</span></h3>
      <h3>Количество часов курсового проекта: <span>{info?.courseProjectsWatch}</span></h3>
      <h3>Тип промежуточной аттестации: <span>{
        (info?.intermediateСertification == 0) ? "Экзамен"
            : (info?.intermediateСertification == 1) ? "Диф. Зачет"
            : (info?.intermediateСertification == 2) ? "Зачет"
                : "Нет"
      }</span></h3>
      <h3>Количество часов консультаций: <span>{info?.onsultationWatch}</span></h3>
    </div>
  </Grid>);
};
