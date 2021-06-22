import { Form, Formik } from "formik";
import {Button, Grid, TextField} from "@material-ui/core";
import "./style.css";
import * as Yup from "yup";
import { backHost } from "../../../shared/consts/api.consts";
import axios from "axios";
import { useHistory } from "react-router";
import {useParams} from "react-router";
import { useEffect, useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите название специальности"),
  code: Yup.string().required("Введите код специальности"),
});

export const EditSpecializationForm = ({ get, items }) => {

  const history = useHistory();

  const {id} = useParams()

  const editSpecializations = (id, values) => {
    return axios.put(`${backHost}/specialization/edit/${id}`, values);
  }
  
  const item = items.map(e => {
    if(e._id === id){
      return e
    }
  }).filter(e => e !== undefined)[0]
  console.log(item);
  return (
      <Grid container xs={7}>
        <div style={{
            width: "100%"
        }}>
          <Formik
              initialValues={{
                name: item.name,
                code: item.code,
              }}
              onSubmit={(values) => {
                editSpecializations(id, values).then(() => {
                  get();
                  alert("Специальность обновлена");
                  history.push("/specialization-list");
                });
              }}
              validationSchema={validationSchema}
          >
            {({ errors, touched, isValid, dirty, handleChange, values }) => {
              return (
                  <Form>
                    <TextField
                        fullWidth
                        name="code"
                        label="Код специальности"
                        value={values.code}
                        onChange={handleChange}
                        error={touched.code && Boolean(errors.code)}
                        helperText={touched.code && errors.code}
                    />
                    <TextField
                        fullWidth
                        name="name"
                        label="Название специальности"
                        value={values.name}
                        onChange={handleChange}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
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
