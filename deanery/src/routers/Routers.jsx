import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Grid } from "@material-ui/core";
import { TeacherInfo } from "../pages/TeacherInfo";
import { ItemsList } from "../hoc/ItemsList";
import { SpecializationInfo } from "../pages/SpecializationInfo";
import { GroupInfo } from "../pages/GroupInfo";
import { AddTeacherForm } from "../components/add-teacher/AddTeacherForm";
import { AddDisciplineForm } from "../components/add-discipline/AddDisciplineForm";
import { AddGroupForm } from "../components/add-group/AddGroupForm";
import { AddSpecializationForm } from "../components/add-specialization/AddSpecializationForm";
import { DistInfo } from "../pages/DistInfo";
import { backHost } from "../shared/consts/api.consts";
import axios from "axios";
import { AddConnectionForm } from "../components/add-connection/AddConnection";
import { AccountingInfo } from "../pages/AccountingInfo";
import { ItemsListAcc } from "../hoc/ItemsListAcc";
import { EditDisciplineForm } from "../components/edit/edit-discipline/EditDisciplineForm";
import { EditGroupForm } from "../components/edit/edit-group/EditGroupForm";
import { EditSpecializationForm } from "../components/edit/edit-specialization/EditSpecializationForm";
import { EditTeacherForm } from "../components/edit/edit-teacher/EditTeacherForm";

export const Routers = () => {
  const [teachers, setTeachers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [connections, setConnections] = useState([]);

  const get = () => {
    axios.get(`${backHost}/teacher/all`).then(({ data }) => {
      setTeachers(data);
    });
    axios.get(`${backHost}/group/all`).then(({ data }) => {
      setGroups(data);
    });
    axios.get(`${backHost}/specialization/all`).then(({ data }) => {
      setSpecializations(data);
    });
    axios.get(`${backHost}/discipline/all`).then(({ data }) => {
      setDisciplines(data);
    });
    axios.get(`${backHost}/teacher-discipline-group/all`).then(({ data }) => {
      setConnections(data);
    });
  };

  const delTeachers = (id) => {
    return axios.delete(`${backHost}/teacher/delete/${id}`);
  }
  const delGroups = (id) => {
    return axios.delete(`${backHost}/group/delete/${id}`);
  }
  const delSpecializations = (id) => {
    return axios.delete(`${backHost}/specialization/delete/${id}`);
  }
  const delDisciplines = (id) => {
    return axios.delete(`${backHost}/discipline/delete/${id}`);
  }
  const delConnections = (id) => {
    return axios.delete(`${backHost}/teacher-discipline-group/delete/${id}`);
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Grid className="education-container" container justify={"center"}>
        <Grid xs={6}>
          <Switch>
            <Route
              render={() => <ItemsList
                title={"Список преподавателей"}
                items={teachers}
                path={"/teacher-info"}
                addPath={"/add-teacher"}
                delItem={delTeachers}
                get={get}
                editPath={"/teacher-edit"}
              />}
              exact
              path="/"
            />
            <Route
              render={() => <ItemsList
                title={"Список специальностей"}
                items={specializations}
                path={"/specialization-info"}
                addPath={"/add-specialization"}
                delItem={delSpecializations}
                get={get}
                editPath={"/specialization-edit"}
              />}
              exact
              path="/specialization-list"
            />
            <Route
              render={() => <ItemsList
                title={"Список групп"}
                items={groups}
                path={"/group-info"}
                addPath={"/add-group"}
                delItem={delGroups}
                get={get}
                editPath={"/group-edit"}
              />}
              exact
              path="/group-list"
            />
            <Route
              render={() => <ItemsList
                title={"Список дисциплин"}
                items={disciplines}
                path={"/disc-info"}
                addPath={"/disc-add"}
                delItem={delDisciplines}
                get={get}
                editPath={"/disc-edit"}
              />}
              exact
              path="/disc-list"
            />
            <Route
              component={ItemsListAcc(
                "Учет",
                connections,
                "/accounting-info",
                "/accounting-add",
                delConnections,
                get
              )}
              exact
              path="/accounting-list"
            />
            <Route render={() => <TeacherInfo infoList={teachers} />} exact path="/teacher-info/:id" />
            <Route render={() => <DistInfo infoList={disciplines} />} exact path="/disc-info/:id" />
            <Route
              exact
              render={() => <SpecializationInfo infoList={specializations} />}
              path="/specialization-info/:id"
            />
            <Route render={() => <GroupInfo infoList={groups} />} exact path="/group-info/:id" />
            <Route
              render={() => <AddTeacherForm get={get} />}
              exact
              path="/add-teacher"
            />
            <Route
              render={() => <AddDisciplineForm get={get} />}
              exact
              path="/disc-add"
            />
            <Route
              render={() => <AddSpecializationForm get={get} />}
              path="/add-specialization"
            />
            <Route
              render={() => (
                <AddConnectionForm
                  get={get}
                  groups={groups}
                  disciplines={disciplines}
                  teachers={teachers}
                />
              )}
              exact
              path="/accounting-add"
            />
            <Route
              render={() => <AddGroupForm get={get} />}
              exact
              path="/add-group"
            />
            <Route
              render={() => <AccountingInfo list={connections} />}
              exact
              path="/accounting-info/:id"
            />


            <Route
              render={() => <EditDisciplineForm get={get} items={disciplines} />}
              exact
              path="/disc-edit/:id"
            />
            <Route
              render={() => <EditGroupForm get={get} items={groups} />}
              exact
              path="/group-edit/:id"
            />
            <Route
              render={() => <EditSpecializationForm get={get} items={specializations} />}
              exact
              path="/specialization-edit/:id"
            />
            <Route
              render={() => <EditTeacherForm get={get} items={teachers} />}
              exact
              path="/teacher-edit/:id"
            />
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};
