import { Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";
import "./style.css";
import axios from "axios";
import * as Yup from "yup";
import { backHost } from "../../shared/consts/api.consts";
import { useHistory } from "react-router";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите имя"),
  surname: Yup.string().required("Введите фамилию"),
  patronymic: Yup.string().required("Введите отчество"),
});

export const AddTeacherForm = ({ get }) => {
  const history = useHistory();
  function addTeacher(data) {
    return axios.post(`${backHost}/teacher/create`, data);
  }
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          patronymic: "",
        }}
        onSubmit={(values) => {
          addTeacher(values).then(() => {
            get();
            alert("Преподаватель добавлен");
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
                    name="surname"
                    label="Фамилия"
                    value={values.surname}
                    onChange={handleChange}
                    error={touched.surname && Boolean(errors.surname)}
                    helperText={touched.surname && errors.surname}
                />
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
                Добавить
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
