import React from "react";
import {useParams} from "react-router";

export const DistInfo = ({infoList}) => {
  const {id} = useParams()

  const info = infoList.map(e => {
    console.log(e._id, id)
    if(e._id === id){
      return e
    }
  }).filter(e => e !== undefined)[0]
  return( <div>
    <h1>Информация о Дисциплине</h1>
    <h3>Название: <span>{info?.name}</span></h3> 
    <h3>Индекс: <span>{info?.index}</span></h3> 
    <h3>Количество часов:</h3>
    <h3>Количество лекционных часов: <span>{info?.lecturesWatch}</span></h3> 
    <h3>Количество практических часов: <span>{info?.practicesWatch}</span></h3> 
    <h3>Количество лабораторных часов: <span>{info?.laboratoryWatch}</span></h3> 
    <h3>Количество семинарных часо: <span>{info?.seminarsWatch}</span></h3> 
    <h3>Количество часов курсового проекта: <span>{info?.courseProjectsWatch}</span></h3> 
    <h3>Количество часов промежуточной аттестации: <span>{info?.intermediateСertificationWatch}</span></h3> 
    <h3>Количество часов индивидуального проекта: <span>{info?.individualProjectWatch}</span></h3> 
  </div>);
};
