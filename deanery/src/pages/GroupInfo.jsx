import React from "react";
import {useParams} from "react-router";

export const GroupInfo = ({infoList}) => {
  const {id} = useParams()

 const info = infoList.map(e => {
     console.log(e._id, id)
    if(e._id === id){
      return e
    }
  }).filter(e => e !== undefined)[0]
  return  ( <div>
      <h1>Информация о группе</h1>
      <h3>Название:</h3> <span>{info?.name}</span>
      <h3>Курс:</h3> <span>{info?.course}</span>
      <h3>Количество учеников:</h3> <span>{info?.quantity}</span>
      <h3>Количество подгрупп:</h3> <span>{info?.subgroups}</span>
      <h3>Является ли потоком:</h3> <span>{info?.isStream ? "Да" : "Нет"}</span>
  </div>);
};
