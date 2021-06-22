import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Paper,
} from "@material-ui/core";
import { useParams } from "react-router";
import { TableItem } from "../components/table-item/TableItem";
import { TableItemCheckbox } from "../components/table-item/TableItemCheckbox";
import axios from "axios";
import { backHost } from "../shared/consts/api.consts";

export const AccountingInfo = ({ list, delItem, get }) => {

  useEffect(() => {
    setAMass(acc)
  }, [list])

  const { id } = useParams()

  const [edit, setEdit] = useState(false)

  const acc = list.map(e => {

    if (e?.teachers?._id === id) {
      return e
    }
  }).filter(e => e !== undefined)
  console.log(acc);
  const handleEdit = () => {
    const postData = aMass.map(e => {
      return {
        _id: e._id,
        teacherId: e.teachers._id,
        disciplineId: e.disciplines._id,
        groupId: e.groups._id,
        lecturesWatch: Number(e.disciplines?.lecturesWatch),
        practicesWatch: Number(e.disciplines?.practicesWatch),
        laboratoryWatch: Number(e.disciplines?.laboratoryWatch),
        seminarsWatch: Number(e.disciplines?.seminarsWatch),
        courseProjectsWatch: Number(e.disciplines?.courseProjectsWatch),
        intermediateСertification: Number(e.disciplines?.intermediateСertification),
        onsultationWatch: Number(e.disciplines?.onsultationWatch),
        subgroups: Number(e.groups?.subgroups),
        isStream: Boolean(e.groups?.isStream),
      }
    })
    axios.put(`${backHost}/teacher-discipline-group/edit-many`, {
      items: postData
    }).then(({ data }) => {
      console.log(data)
    });
  }

  const [aMass, setAMass] = useState([acc])


  const editValue = (indexItem, field, value) => {
    setAMass(aMass.map((e, index) => {
      if (indexItem === index) {
        e.disciplines[field] = value
        return e
      }
      return e
    }))
  }
  const editValueGroup = (indexItem, field, value) => {
    console.log(field, value);
    setAMass(aMass.map((e, index) => {
      if (indexItem === index) {
        e.groups[field] = value
        return e
      }
      return e
    }))
  }

  return (
    <React.Fragment>
      <h1>Информация о нагрузке для {acc?.[0]?.teachers?.patronymic} {acc?.[0]?.teachers?.name} {acc?.[0]?.teachers?.surname} <Button onClick={() => {
        if (edit) {
          handleEdit()
        }
        setEdit(!edit)
      }}>{edit ? "Сохранить" : 'Изменить'}</Button></h1>
      <Grid xs={10}>
        <Paper square={true} className={'table-wrapper'}>
          <Grid style={{
            alignItems: 'center'
          }} container justify='space-between'>
            <TableItem width={80} value={'Индекс'} edit={false} />
            <TableItem width={150} value={'Название дисциплины'} edit={false} />
            <TableItem width={60} value={'Лекции'} edit={false} />
            <TableItem width={60} value={'Практики'} edit={false} />
            <TableItem width={90} value={'Лабораторные'} edit={false} />
            <TableItem width={60} value={'Семинары'} edit={false} />
            <TableItem width={60} value={'Курс. проекты'} edit={false} />
            <TableItem width={60} value={'Тип промежут. аттестации'} edit={false} />
            <TableItem width={60} value={'Консультации'} edit={false} />
            <TableItem width={60} value={'Кол-во. подгрупп'} edit={false} />
            <TableItem width={60} value={'Поток'} edit={false} />
          </Grid>
        </Paper>
      </Grid>

      {aMass.map((el, index) => {
        return (
          <Grid alignItems="center" container justify='space-between'>
            <Grid xs={10}>
              <Paper square={true} className={'table-wrapper'}>
                <Grid style={{
                  alignItems: 'center'
                }} container justify='space-between'>
                  <TableItem onChange={(value) => editValue(index, 'index', value)} width={80} value={el?.disciplines?.index} edit={false} />
                  <TableItem onChange={(value) => editValue(index, 'name', value)} width={150} value={el?.disciplines?.name} edit={false} />
                  <TableItem onChange={(value) => editValue(index, 'lecturesWatch', value)} width={60} value={el?.disciplines?.lecturesWatch} edit={edit} />
                  <TableItem onChange={(value) => editValue(index, 'practicesWatch', value)} width={60} value={el?.disciplines?.practicesWatch} edit={edit} />
                  <TableItem onChange={(value) => editValue(index, 'laboratoryWatch', value)} width={90} value={el?.disciplines?.laboratoryWatch} edit={edit} />
                  <TableItem onChange={(value) => editValue(index, 'seminarsWatch', value)} width={60} value={el?.disciplines?.seminarsWatch} edit={edit} />
                  <TableItem onChange={(value) => editValue(index, 'courseProjectsWatch', value)} width={60} value={el?.disciplines?.courseProjectsWatch} edit={edit} />

                  <TableItem onChange={(value) => editValue(index, 'intermediateСertification', value)} width={60} value={
                    (el?.disciplines?.intermediateСertification == 0) ? "Экзамен" 
                  : (el?.disciplines?.intermediateСertification == 1) ? "Диф. Зачет" 
                  : (el?.disciplines?.intermediateСertification == 2) ? "Зачет" 
                  : "Нет"
                    } edit={false} />

                  <TableItem onChange={(value) => editValue(index, 'onsultationWatch', value)} width={60} value={el?.disciplines?.onsultationWatch} edit={edit} />
                  <TableItem onChange={(value) => editValueGroup(index, 'subgroups', value)} width={60} value={el?.groups?.subgroups} edit={edit} />
                  <TableItemCheckbox onChange={(value) => editValueGroup(index, 'isStream', value)} width={60} value={el?.groups?.isStream} edit={edit} />
                </Grid>
              </Paper>
            </Grid>

            <Grid xs={2}>
              <Button style={
                {
                  marginLeft: 10
                }
              } variant="outlined" color="primary" onClick={(event) => {
                event.stopPropagation()
                delItem(el._id).then(() => {
                  get()
                  alert("Удалено.")
                })

              }}>
                Удалить
              </Button>
            </Grid>

          </Grid>

        )
      })}
    </React.Fragment>
  );
};
