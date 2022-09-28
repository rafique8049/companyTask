import React, { useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import axios from "axios";

export const Task = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userGroup, setUserGroup] = useState("Operator");
  const [checkJump, setCheckJump] = useState("");
  const [checkStd, setCheckStd] = useState("");
  const [checkSit, setCheckSit] = useState("");
  const [checkRun, setCheckRun] = useState("");

  const handleChange = (event) => {
    setUserGroup(event.target.value);
  };

  const handledSave = async () => {
    console.log("handledSave");
    const payload = { firstName, lastName, userGroup };
    console.log("payload=>", payload);
    dispatch({ type: "ADD_USER", data: payload });

    const result = await axios.post("http://localhost:3030/addusers", payload);
    console.log(result);
  };
  const handledCancel = () => {
    setFirstName("");
    setLastName("");
    setUserGroup("Operator");
  };

  return (
    <React.Fragment>
      <h1>Task</h1>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <label htmlFor="">User Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br /> <br />
          <label htmlFor="">Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h3>Authorization :</h3>
              <label htmlFor="">Group: </label>
              <br />
              <br />

              <Box sx={{ minWidth: 120 }}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Authorization
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userGroup}
                    label="Authorizations"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Operator"}>Operator</MenuItem>
                    <MenuItem value={"Administrator"}>Administrator</MenuItem>
                    <MenuItem value={"Service"}>Service</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <h5>Permissions </h5>

              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value="jumping"
                  onChange={(e) => setCheckJump(e.target.value)}
                />{" "}
                <label>jumping</label>
                <br />
                <br />
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value="Standing"
                  onChange={(e) => setCheckStd(e.target.value)}
                />{" "}
                <label>Standing</label>
                <br />
                <br />
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value="Sitting"
                  onChange={(e) => setCheckSit(e.target.value)}
                />{" "}
                <label>Sitting</label>
                <br />
                <br />
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value="Running"
                  onChange={(e) => setCheckRun(e.target.value)}
                />{" "}
                <label>Running</label>
                <br />
                <br />
              </div>
            </CardContent>
          </Card>
          <span>
            <Button variant="contained" onClick={handledCancel}>
              Cancel
            </Button>
          </span>
          <span>
            <Button variant="contained" onClick={handledSave}>
              Save
            </Button>
          </span>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
