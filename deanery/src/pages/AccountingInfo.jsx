import React, {useEffect, useState} from "react";
import {
  Button,
  Grid,
  Paper,
} from "@material-ui/core";
import { useParams } from "react-router";
import {TableItem} from "../components/table-item/TableItem";
import axios from "axios";
import {backHost} from "../shared/consts/api.consts";

export const AccountingInfo = ({ list }) => {

  useEffect(() => {
    setAMass(acc)
  },[list])

  const { id } = useParams()

  const [edit, setEdit] = useState(false)

  const acc = list.map(e => {

    if(e?.teachers?._id === id){
      return e
    }
  }).filter(e => e !== undefined)

 const handleEdit = () => {
      const postData = aMass.map(e => {
          return {
              _id: e.disciplines._id,
              teacherId: e.teachers._id,
              disciplineId: e.disciplines._id,
              groupId: e.groups._id,
              lecturesWatch: Number(e.disciplines?.lecturesWatch),
              practicesWatch: Number(e.disciplines?.practicesWatch),
              laboratoryWatch: Number(e.disciplines?.practicesWatch),
              seminarsWatch: Number(e.disciplines?.seminarsWatch),
              courseProjectsWatch: Number(e.disciplines?.courseProjectsWatch),
              intermediateСertificationWatch: Number(e.disciplines?.intermediateСertificationWatch),
              individualProjectWatch: Number(e.disciplines?.individualProjectWatch)
      }
      })
     axios.post(`${backHost}/edit-many`,postData).then(({ data }) => {
            console.log(data)
     });
 }

  const [aMass, setAMass] = useState([acc])


  const editValue =  (indexItem, field, value) => {
    setAMass(aMass.map((e, index) => {
      if (indexItem === index){
        e.disciplines[field]  =value
        return  e
      }
      return e
    }))
  }

  return (
    <React.Fragment>
      <h1>Информация о нагрузке для {acc?.[0]?.teachers?.patronymic} {acc?.[0]?.teachers?.name} {acc?.[0]?.teachers?.surname} <Button onClick={() => {
          if(edit){
              handleEdit()
          }
          setEdit(!edit)
      }}>{edit? "Сохранить" : 'Изменить'}</Button></h1>
      <Paper square={true} className={'table-wrapper'}>
        <Grid style={{
          alignItems: 'center'
        }} container justify='space-between'>
        <TableItem width={80} value={'Индекс'} edit={false}/>
          <TableItem width={150} value={'Название дисциплины'} edit={false}/>
          <TableItem width={60} value={'Лекции'} edit={false}/>
          <TableItem width={60} value={'Практики'} edit={false}/>
          <TableItem width={90} value={'Лабораторные'} edit={false}/>
          <TableItem width={60} value={'Семинары'} edit={false}/>
          <TableItem width={60} value={'Курс. проекты'} edit={false}/>
          <TableItem width={60} value={'Промежут. аттестация'} edit={false}/>
          <TableItem width={60} value={'Индивид. проекты'} edit={false}/>
        </Grid>
      </Paper>
      {aMass.map((el, index) => {
        return (
            <Paper square={true} className={'table-wrapper'}>
              <Grid style={{
                alignItems: 'center'
              }} container justify='space-between'>
                <TableItem onChange={(value) => editValue(index, 'index', value)} width={80} value={el?.disciplines?.index} edit={false}/>
                <TableItem onChange={(value) => editValue(index, 'name', value)} width={150} value={el?.disciplines?.name} edit={false}/>
                <TableItem onChange={(value) => editValue(index, 'lecturesWatch', value)} width={60} value={el?.disciplines?.lecturesWatch} edit={edit}/>
                <TableItem onChange={(value) => editValue(index, 'practicesWatch', value)} width={60} value={el?.disciplines?.practicesWatch} edit={edit}/>
                <TableItem onChange={(value) => editValue(index, 'laboratoryWatch', value)} width={90} value={el?.disciplines?.laboratoryWatch} edit={edit}/>
                <TableItem onChange={(value) => editValue(index, 'seminarsWatch', value)} width={60} value={el?.disciplines?.seminarsWatch} edit={edit}/>
                <TableItem onChange={(value) => editValue(index, 'courseProjectsWatch', value)} width={60} value={el?.disciplines?.courseProjectsWatch} edit={edit}/>
                <TableItem onChange={(value) => editValue(index, 'intermediateСertificationWatch', value)} width={60} value={el?.disciplines?.intermediateСertificationWatch} edit={edit}/>
                <TableItem onChange={(value) => editValue(index, 'individualProjectWatch', value)} width={60} value={el?.disciplines?.individualProjectWatch} edit={edit}/>
              </Grid>
            </Paper>
        )
      })}
      {/*<TableContainer component={Paper}>*/}
      {/*  <Table size="small" aria-label="a dense table">*/}
      {/*    <TableHead>*/}
      {/*      <TableRow>*/}
      {/*        <TableCell align="right">Индекс</TableCell>*/}
      {/*        <TableCell>Название дисциплины</TableCell>*/}
      {/*        <TableCell align="right">Лекции</TableCell>*/}
      {/*        <TableCell align="right">Практики</TableCell>*/}
      {/*        <TableCell align="right">Лабораторные</TableCell>*/}
      {/*        <TableCell align="right">Семинары</TableCell>*/}
      {/*        <TableCell align="right">Курс. проекты</TableCell>*/}
      {/*        <TableCell align="right">Промежут. аттестация</TableCell>*/}
      {/*        <TableCell align="right">Индивид. проекты</TableCell>*/}
      {/*      </TableRow>*/}
      {/*    </TableHead>*/}
      {/*    <TableBody>*/}
      {/*      {*/}
      {/*        acc.map((el) => {*/}
      {/*          return (*/}
      {/*            <TableRow key={el?.disciplines?.name}>*/}
      {/*              <TableCell align="right">{el?.disciplines?.index}</TableCell>*/}
      {/*              <TableCell component="th" scope="row">{el?.disciplines?.name}</TableCell>*/}
      {/*              <TableCell align="right">{el?.disciplines?.lecturesWatch}</TableCell>*/}
      {/*              <TableCell align="right">{el?.disciplines?.practicesWatch}</TableCell>*/}
      {/*              <TableCell align="right">{el?.disciplines?.laboratoryWatch}</TableCell>*/}
      {/*              <TableCell align="right">{el?.disciplines?.seminarsWatch}</TableCell>*/}
      {/*              <TableCell align="right">{el?.disciplines?.courseProjectsWatch}</TableCell>*/}
      {/*              <TableCell align="right">{el?.disciplines?.intermediateСertificationWatch}</TableCell>*/}
      {/*              <TableCell align="right">{el?.disciplines?.individualProjectWatch}</TableCell>*/}
      {/*          </TableRow>*/}
      {/*          )*/}
      {/*        })*/}
      {/*      }*/}
      {/*      */}
      {/*    </TableBody>*/}
      {/*  </Table>*/}
      {/*</TableContainer>*/}
    </React.Fragment>
  );
};
