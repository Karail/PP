import { Form, Formik } from "formik";
import { Button, MenuItem, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { backHost } from "../../shared/consts/api.consts";
import axios from "axios";
import { useHistory } from "react-router";

const validationSchema = Yup.object().shape({
  teacher: Yup.object().required("Выберите преподавателя"),
  discipline: Yup.object().required("Введите дисциплину"),
  group: Yup.object().required("Введите группу"),
  lecturesWatch: Yup.number().required("Введите количество часов"),
  practicesWatch: Yup.number().required("Введите количество часов"),
  laboratoryWatch: Yup.number().required("Введите количество часов"),
  seminarsWatch: Yup.number().required("Введите количество часов"),
  courseProjectsWatch: Yup.number().required("Введите количество часов"),
  intermediateСertificationWatch: Yup.number().required("Введите количество часов"),
  individualProjectWatch: Yup.number().required("Введите количество часов"),
});

export const AddConnectionForm = ({ teachers, disciplines, groups, get }) => {
  const history = useHistory();

  function addDiscipline(data) {

    return axios.post(`${backHost}/teacher-discipline-group/create/`, {
      teacherId: data.teacher._id,
      disciplineId: data.discipline._id,
      groupId: data.group._id,
      lecturesWatch: data.lecturesWatch,
      practicesWatch: data.practicesWatch,
      laboratoryWatch: data.laboratoryWatch,
      seminarsWatch: data.seminarsWatch,
      courseProjectsWatch: data.courseProjectsWatch,
      intermediateСertificationWatch: data.intermediateСertificationWatch,
      individualProjectWatch: data.individualProjectWatch,
    });
  }

  return (
    <div>
      <Formik
        initialValues={{
          teacher: "",
          discipline: "",
          group: "",
          lecturesWatch: "0",
          practicesWatch: "0",
          laboratoryWatch: "0",
          seminarsWatch: "0",
          courseProjectsWatch: "0",
          intermediateСertificationWatch: "0",
          individualProjectWatch: "0",
        }}
        onSubmit={(values) => {
          addDiscipline(values).then(() => {
            get();
            alert("Пункт учета добавлен");
            history.push("/accounting-list");
          });
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid, dirty, handleChange, values, setFieldValue }) => {
          return (
            <Form>
              <TextField
                name="teacher"
                select
                label="Преподаватель"
                value={values.teacher}
                onChange={handleChange}
                error={touched.teacher && Boolean(errors.teacher)}
                helperText={touched.teacher && errors.teacher}
                fullWidth
              >
                {teachers.map((e) => {
                  return <MenuItem key={e._id} value={e}>{e.name}</MenuItem>;
                })}
              </TextField>
              <TextField
                name="discipline"
                select
                label="Дисциплина"
                value={values.discipline}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFieldValue('discipline', e.target.value)
                  setFieldValue('lecturesWatch', e.target.value.watch || 0)
                  setFieldValue('practicesWatch', e.target.value.watch || 0)
                }}
                error={touched.discipline && Boolean(errors.discipline)}
                helperText={touched.discipline && errors.discipline}
                fullWidth
              >
                {disciplines.map((e) => {
                  return <MenuItem key={e._id} value={e}>{e.name}</MenuItem>;
                })}
              </TextField>
              <TextField
                fullWidth
                name="lecturesWatch"
                label="Лекционные часы"
                value={values.lecturesWatch}
                onChange={handleChange}
                error={touched.lecturesWatch && Boolean(errors.lecturesWatch)}
                helperText={touched.lecturesWatch && errors.lecturesWatch}
              />
              <TextField
                fullWidth
                name="practicesWatch"
                label="Практические часы"
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
              <TextField
                name="group"
                select
                label="Группа"
                value={values.group}
                onChange={handleChange}
                error={touched.group && Boolean(errors.group)}
                helperText={touched.group && errors.group}
                fullWidth
              >
                {groups.map((e) => {
                  return <MenuItem key={e._id} value={e}>{e.name}</MenuItem>;
                })}
              </TextField>

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
