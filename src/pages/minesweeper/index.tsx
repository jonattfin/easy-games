import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import _ from "lodash";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import MoodIcon from "@mui/icons-material/Mood";
import MoodBadIcon from "@mui/icons-material/MoodBad";

export default function Component() {
  const [values, setValues] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) return;

    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000); // clearing interval
    return () => clearInterval(timer);
  });

  const handleClick = (e: any, i: number, j: number) => {
    if (!isStarted) return;

    if (e.type === "click") {
      console.log("Left click");
      console.log(i, j);
    } else if (e.type === "contextmenu") {
      console.log("Right click");
      console.log(i, j);

      const array: any = [...values, { i, j }];
      setValues(array);
    }
  };

  const handleOnStartButtonClick = () => setIsStarted(!isStarted);

  return (
    <Container maxWidth="xs">
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={5}>
          <TextField
            fullWidth
            variant="outlined"
            value={0}
            disabled
            label="Bombs"
          />
        </Grid>

        <Grid item xs={2}>
          <Button variant="contained" onClick={handleOnStartButtonClick}>
            {isStarted ? <MoodIcon /> : <MoodBadIcon />}
          </Button>
        </Grid>

        <Grid item xs={5}>
          <TextField
            fullWidth
            variant="outlined"
            value={seconds}
            disabled
            label="Time (in seconds)"
          />
        </Grid>

        <Grid item xs={12}>
          {_.range(1, 11).map((i: number) => {
            return (
              <ButtonGroup key={`button-group-${i}`} variant="outlined">
                {_.range(1, 11).map((j: number) => {
                  const isChecked = isUnknown(values, i, j);

                  return (
                    <Button
                      variant={isChecked ? "contained" : "outlined"}
                      key={`button-${i}-${j}`}
                      onClick={(event) => handleClick(event, i, j)}
                      onContextMenu={(event) => handleClick(event, i, j)}
                    >
                      {isChecked ? "?" : "."}
                    </Button>
                  );
                })}
              </ButtonGroup>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

function isUnknown(values: any, i: number, j: number) {
  for (var value of values) {
    if (value.i == i && value.j == j) return true;
  }
  return false;
}
