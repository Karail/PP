import { Form, Formik } from "formik";
import {Button, MenuItem, TextField, Checkbox, FormControlLabel, Grid,} from "@material-ui/core";
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
  onsultationWatch: Yup.number().required("Введите количество часов"),
  subgroups: Yup.number().required("Введите количество подгрупп"),
  isStream: Yup.boolean(),
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
      intermediateСertification: data.intermediateСertification,
      onsultationWatch: data.onsultationWatch,
      subgroups: data.subgroups,
      isStream: data.isStream,
    });
  }

  return (
    <Grid container xs={7}>
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
          intermediateСertification: "",
          onsultationWatch: "0",
          subgroups: 1,
          isStream: false,
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
            console.log(values)
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
                  return <MenuItem key={e._id} value={e}>{e.surname} {e.name} {e.patronymic}</MenuItem>;
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
                  setFieldValue('lecturesWatch', e.target.value.lecturesWatch || 0)
                  setFieldValue('practicesWatch', e.target.value.practicesWatch || 0)
                  setFieldValue('laboratoryWatch', e.target.value.laboratoryWatch || 0)
                  setFieldValue('seminarsWatch', e.target.value.seminarsWatch || 0)
                  setFieldValue('courseProjectsWatch', e.target.value.courseProjectsWatch || 0)
                  setFieldValue('intermediateСertification', e.target.value.intermediateСertification || null)
                  setFieldValue('onsultationWatch', e.target.value.onsultationWatch || 0)
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
                name="intermediateСertification"
                select
                label="Тип промежуточной аттестации"
                value={values.intermediateСertification}
                onChange={handleChange}
                error={touched.intermediateСertification && Boolean(errors.intermediateСertification)}
                helperText={touched.intermediateСertification && errors.intermediateСertification}
                fullWidth
              >
                <MenuItem key={0} value={0}>Экзамен</MenuItem>
                <MenuItem key={1} value={1}>Диф. Зачет</MenuItem>
                <MenuItem key={2} value={2}>Зачет</MenuItem>
                <MenuItem key={3} value={null}>Нет</MenuItem>
              </TextField>
                {values.intermediateСertification === 0 &&    <TextField
                    fullWidth
                    name="onsultationWatch"
                    label="Количество часов консультаций"
                    value={values.onsultationWatch}
                    onChange={handleChange}
                    error={touched.onsultationWatch && Boolean(errors.onsultationWatch)}
                    helperText={touched.onsultationWatch && errors.onsultationWatch}
                />}

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
                Добавить
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};
