import { Form, Formik } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import "./style.css";
import * as Yup from "yup";
import { backHost } from "../../shared/consts/api.consts";
import axios from "axios";
import { useHistory } from "react-router";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите название группы"),
  course: Yup.number().required("Введите курс"),
  quantity: Yup.number().required("Введите количество учащихся"),
});

export const AddGroupForm = ({ get }) => {
  const history = useHistory();
  function addGroup(data) {
    return axios.post(`${backHost}/group/create`, data);
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          course: 1,
          quantity: 1,
        }}
        onSubmit={(values) => {
          console.log(values);
          addGroup(values).then(() => {
            get();
            alert("Группа добавлена");
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
