import { Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";
import "./style.css";
import * as Yup from "yup";
import { backHost } from "../../shared/consts/api.consts";
import axios from "axios";
import { useHistory } from "react-router";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите название дисциплины"),
  index: Yup.string().required("Введите индекс дисциплины"),
  lecturesWatch: Yup.number().required("Введите количество часов"),
  practicesWatch: Yup.number().required("Введите количество часов"),
  laboratoryWatch: Yup.number().required("Введите количество часов"),
  seminarsWatch: Yup.number().required("Введите количество часов"),
  courseProjectsWatch: Yup.number().required("Введите количество часов"),
  intermediateСertificationWatch: Yup.number().required("Введите количество часов"),
  individualProjectWatch: Yup.number().required("Введите количество часов"),
});

export const AddDisciplineForm = ({ get }) => {
  const history = useHistory();

  function addDiscipline(data) {
    return axios.post(`${backHost}/discipline/create`, data);
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          index: "",
          lecturesWatch: "",
          practicesWatch: "",
          laboratoryWatch: "",
          seminarsWatch: "",
          courseProjectsWatch: "",
          intermediateСertificationWatch: "",
          individualProjectWatch: "",
        }}
        onSubmit={(values) => {
          addDiscipline(values).then(() => {
            get();
            alert("Дисциплина добавлена");
            history.push("/disc-list");
          });
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid, dirty, handleChange, values }) => {
          return (
            <Form>
              <TextField
                fullWidth
                name="index"
                label="Индекс дисциплины"
                value={values.index}
                onChange={handleChange}
                error={touched.index && Boolean(errors.index)}
                helperText={touched.index && errors.index}
              />
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
                name="lecturesWatch"
                label="Количество лекционных часов"
                value={values.lecturesWatch}
                onChange={handleChange}
                error={touched.lecturesWatch && Boolean(errors.lecturesWatch)}
                helperText={touched.lecturesWatch && errors.lecturesWatch}
              />
              <TextField
                fullWidth
                name="practicesWatch"
                label="Количество практических часов"
                value={values.practicesWatch}
                onChange={handleChange}
                error={touched.practicesWatch && Boolean(errors.practicesWatch)}
                helperText={touched.practicesWatch && errors.practicesWatch}
              />

              <TextField
                fullWidth
                name="laboratoryWatch"
                label="Количество лабораторных часов"
                value={values.laboratoryWatch}
                onChange={handleChange}
                error={touched.laboratoryWatch && Boolean(errors.laboratoryWatch)}
                helperText={touched.laboratoryWatch && errors.laboratoryWatch}
              />
              <TextField
                fullWidth
                name="seminarsWatch"
                label="Количество семинарных часов"
                value={values.seminarsWatch}
                onChange={handleChange}
                error={touched.seminarsWatch && Boolean(errors.seminarsWatch)}
                helperText={touched.seminarsWatch && errors.seminarsWatch}
              />
              <TextField
                fullWidth
                name="courseProjectsWatch"
                label="Количество часов курсового проекта"
                value={values.courseProjectsWatch}
                onChange={handleChange}
                error={touched.courseProjectsWatch && Boolean(errors.courseProjectsWatch)}
                helperText={touched.courseProjectsWatch && errors.courseProjectsWatch}
              />
              <TextField
                fullWidth
                name="intermediateСertificationWatch"
                label="Количество часов промежуточной аттестации"
                value={values.intermediateСertificationWatch}
                onChange={handleChange}
                error={touched.intermediateСertificationWatch && Boolean(errors.intermediateСertificationWatch)}
                helperText={touched.intermediateСertificationWatch && errors.intermediateСertificationWatch}
              />
              <TextField
                fullWidth
                name="individualProjectWatch"
                label="Количество часов индивидуального проекта"
                value={values.individualProjectWatch}
                onChange={handleChange}
                error={touched.individualProjectWatch && Boolean(errors.individualProjectWatch)}
                helperText={touched.individualProjectWatch && errors.individualProjectWatch}
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
