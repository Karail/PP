import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const ItemsList = ({ title, items, path, addPath, delItem, get, editPath }) => {

  const history = useHistory();


  return (
      <Grid container xs={7}>
        <div style={{
            width: "100%"
        }}>
          <Grid alignItems="center" container justify="space-between">
            <h1>{title}</h1>
            <NavLink className="link" to={addPath} exact>
              <Button variant="outlined" color="primary">
                <b>Добавить</b>
              </Button>
            </NavLink>
          </Grid>
          {items?.map((e) => {
            return (
                <div className="link" onClick={() => { history.push(`${path + '/' + e._id}`)  }}>
                  <Paper className="list-item">
                    <Grid alignItems="center" container justify="space-between">
                      <p>     {e.name}</p>
                      <Grid container justify="space-between" xs={3}>
                        <Button variant="outlined" color="primary" onClick={(event) => {
                          event.stopPropagation()
                          delItem(e._id).then(() => {
                            get()
                            alert("Удалено.")
                          })

                        }}>
                          Удалить
                        </Button>
                        <Button style={{zIndex: 999}} variant="outlined" color="primary" onClick={(event) => {
                          event.stopPropagation()
                          history.push(`${editPath + '/' + e._id}`)
                        }}>
                          <b>Изменить</b>
                        </Button>
                      </Grid>
                    </Grid>


                  </Paper>
                </div>
            );
          })}
        </div>
      </Grid>

  )

}