import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useParams } from "react-router";

export const AccountingInfo = ({ list }) => {

  const { id } = useParams()

  const acc = list.map(e => {

    if(e?.teachers?._id === id){
      return e
    }
  }).filter(e => e !== undefined)

  return (
    <React.Fragment>
      <h1>Информация о нагрузке для {acc?.[0]?.teachers?.patronymic} {acc?.[0]?.teachers?.name} {acc?.[0]?.teachers?.surname}</h1>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Индекс</TableCell>
              <TableCell>Название дисциплины</TableCell>
              <TableCell align="right">Лекции</TableCell>
              <TableCell align="right">Практики</TableCell>
              <TableCell align="right">Лабораторные</TableCell>
              <TableCell align="right">Семинары</TableCell>
              <TableCell align="right">Курс. проекты</TableCell>
              <TableCell align="right">Промежут. аттестация</TableCell>
              <TableCell align="right">Индивид. проекты</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              acc.map((el) => {
                return (
                  <TableRow key={el?.disciplines?.name}>
                    <TableCell align="right">{el?.disciplines?.index}</TableCell>
                    <TableCell component="th" scope="row">{el?.disciplines?.name}</TableCell>
                    <TableCell align="right">{el?.disciplines?.lecturesWatch}</TableCell>
                    <TableCell align="right">{el?.disciplines?.practicesWatch}</TableCell>
                    <TableCell align="right">{el?.disciplines?.laboratoryWatch}</TableCell>
                    <TableCell align="right">{el?.disciplines?.seminarsWatch}</TableCell>
                    <TableCell align="right">{el?.disciplines?.courseProjectsWatch}</TableCell>
                    <TableCell align="right">{el?.disciplines?.intermediateСertificationWatch}</TableCell>
                    <TableCell align="right">{el?.disciplines?.individualProjectWatch}</TableCell>
                </TableRow>
                )
              })
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
