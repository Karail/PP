import React from "react";
import {Grid, Paper} from "@material-ui/core";

export const TeachersList = () => {
  const teachers = [1, 2, 3, 4, 5, 6, 7, 123, 8, 9];
  return (
      <Grid container xs={7}>
          <div>
              <h1>Cписок преподавателей </h1>
              {teachers.map((e) => {
                  return <Paper className="list-item">e</Paper>;
              })}
          </div>
      </Grid>
  );
};
