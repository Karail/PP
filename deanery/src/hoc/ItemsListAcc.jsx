import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {useHistory} from "react-router";

export const ItemsListAcc = ({title, items, path, addPath, delItem, get}) => {

  const acc = {}

  const history = useHistory();

  items.forEach(e => {
    if (!acc[e?.teachers?._id]) {
      acc[e?.teachers?._id] = e?.teachers
    }
  });


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

        {Object.values(acc).map((e, index) => {
          console.log(e);
          return (
              <Paper onClick={() => { history.push(`${path + '/' + e._id}`)  }} className="list-item">
                <Grid container  alignItems="center" justify="space-between">
                  <p>{e?.surname} {e?.name} {e?.patronymic}</p>
                </Grid>
              </Paper>
          );
        })}
      </div>
    );
};
