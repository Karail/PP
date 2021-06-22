import { Form, Formik } from "formik";
import {Button, Grid, TextField} from "@material-ui/core";
import "./style.css";
import axios from "axios";
import * as Yup from "yup";
import { backHost } from "../../../shared/consts/api.consts";
import { useHistory } from "react-router";
import {useParams} from "react-router";
import { useEffect, useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите имя"),
  surname: Yup.string().required("Введите фамилию"),
  patronymic: Yup.string().required("Введите отчество"),
});

export const EditTeacherForm = ({ get, items }) => {

  const history = useHistory();

  const {id} = useParams()

  const editTeachers = (id, values) => {
    return axios.put(`${backHost}/teacher/edit/${id}`, values);
  }

  const item = items.map(e => {
   if(e._id === id){
     return e
   }
 }).filter(e => e !== undefined)[0]

  return (
      <Grid container xs={7}>
          <div style={{
              width: "100%"
          }}>
              <Formik
                  initialValues={{
                      name: item.name,
                      surname: item.surname,
                      patronymic: item.patronymic,
                  }}
                  onSubmit={(values) => {
                      editTeachers(id, values).then(() => {
                          get();
                          alert("Преподаватель обновлен");
                          history.push("/");
                      });
                  }}
                  validationSchema={validationSchema}
              >
                  {({ errors, touched, isValid, dirty, handleChange, values }) => {
                      return (
                          <Form>
                              <TextField
                                  fullWidth
                                  name="name"
                                  label="Имя"
                                  value={values.name}
                                  onChange={handleChange}
                                  error={touched.name && Boolean(errors.name)}
                                  helperText={touched.name && errors.name}
                              />
                              <TextField
                                  fullWidth
                                  name="surname"
                                  label="Фамилия"
                                  value={values.surname}
                                  onChange={handleChange}
                                  error={touched.surname && Boolean(errors.surname)}
                                  helperText={touched.surname && errors.surname}
                              />
                              <TextField
                                  fullWidth
                                  name="patronymic"
                                  label="Отчество"
                                  value={values.patronymic}
                                  onChange={handleChange}
                                  error={touched.patronymic && Boolean(errors.patronymic)}
                                  helperText={touched.patronymic && errors.patronymic}
                              />
                              <Button
                                  className="add-teacher-btn"
                                  color="primary"
                                  variant="contained"
                                  fullWidth
                                  type="submit"
                              >
                                  Изменить
                              </Button>
                          </Form>
                      );
                  }}
              </Formik>
          </div>
      </Grid>

  );
};
