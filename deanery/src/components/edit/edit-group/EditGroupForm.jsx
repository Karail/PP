import { Form, Formik } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel, Grid,
  TextField,
} from "@material-ui/core";
import "./style.css";
import * as Yup from "yup";
import { backHost } from "../../../shared/consts/api.consts";
import axios from "axios";
import { useHistory } from "react-router";
import {useParams} from "react-router";
import { useEffect, useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите название группы"),
  course: Yup.number().required("Введите курс"),
  quantity: Yup.number().required("Введите количество учащихся"),
  subgroups: Yup.number().required("Введите количество подгрупп"),
  isStream: Yup.boolean(),
});

export const EditGroupForm = ({ get, items }) => {

  const history = useHistory();

  const {id} = useParams()

  const editGroups = (id, values) => {
    return axios.put(`${backHost}/group/edit/${id}`, values);
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
                course: item.course,
                quantity: item.quantity,
                subgroups: item.subgroups,
                isStream: item.isStream,
              }}
              onSubmit={(values) => {
                console.log(values);
                editGroups(id, values).then(() => {
                  get();
                  alert("Группа обновлена");
                  history.push("/group-list");
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
                        label="Название"
                        value={values.name}
                        onChange={handleChange}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                    />
                    <TextField
                        fullWidth
                        name="course"
                        label="Курс"
                        value={values.course}
                        onChange={handleChange}
                        error={touched.course && Boolean(errors.course)}
                        helperText={touched.course && errors.course}
                    />
                    <TextField
                        fullWidth
                        name="quantity"
                        label="Количество учеников"
                        value={values.quantity}
                        onChange={handleChange}
                        error={touched.quantity && Boolean(errors.quantity)}
                        helperText={touched.quantity && errors.quantity}
                    />
                    <TextField
                        fullWidth
                        disabled={values.isStream}
                        name="subgroups"
                        label="Количество подгрупп"
                        value={values.subgroups}
                        onChange={handleChange}
                        error={touched.subgroups && Boolean(errors.subgroups)}
                        helperText={touched.subgroups && errors.subgroups}
                    />
                    <FormControlLabel
                        control={
                          <Checkbox
                              value={values.isStream}
                              onChange={handleChange}
                              name="isStream"
                              color="primary"
                              inputProps={{ "aria-label": "secondary checkbox" }}
                          />
                        }
                        label="Является потоком"
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
