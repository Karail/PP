import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export const ItemsListAcc = (title, items, path, addPath, delItem, get) => {

  const acc = {}

  items.forEach(e => {
    if (!acc[e?.teachers?._id]) {
      acc[e?.teachers?._id] = e?.teachers
    }
  });

  return () => {
    return (
      <div>
        <Grid alignItems="center" container justify="space-between">
          <h1>{title}</h1>
          <NavLink className="link" to={addPath} exact>
            <Button variant="outlined" color="primary" color="primary">
              <b>Добавить</b>
            </Button>
          </NavLink>
        </Grid>

        {Object.values(acc).map((e) => {
          console.log(e);
          return (
            <NavLink className="link" to={`${path+'/'+e?._id}`} exact>
              <Paper className="list-item">{e?.patronymic} {e?.name} {e?.surname}</Paper>
            </NavLink>
          );
        })}
      </div>
    );
  };
};
