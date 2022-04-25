import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import _ from "lodash";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import MoodIcon from "@mui/icons-material/Mood";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";

export default function Component() {
  const [unknowns, setUnknowns] = useState(0);
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
    if (unknowns == 0) return;

    if (e.type === "click") {
      console.log("Left click");
      console.log(i, j);
    } else if (e.type === "contextmenu") {
      e.preventDefault();

      console.log("Right click");
      console.log(i, j);

      const array: any = [...values, { i, j }];
      setValues(array);

      setUnknowns(unknowns - 1);
    }
  };

  const handleOnStartButtonClick = () => {
    const newIsStarted = !isStarted;
    if (newIsStarted) {
      setUnknowns(10);
    }

    setIsStarted(newIsStarted);

    if (!newIsStarted) {
      setSeconds(0);
      setValues([]);
      setUnknowns(0);
    }
  };

  return (
    <Container maxWidth="xs">
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={5}>
          <TextField
            fullWidth
            variant="outlined"
            value={unknowns}
            disabled
            label="Flags (remaining)"
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
                      fullWidth
                      variant={isChecked ? "contained" : "outlined"}
                      key={`button-${i}-${j}`}
                      onClick={(event) => handleClick(event, i, j)}
                      onContextMenu={(event) => handleClick(event, i, j)}
                    >
                      {isChecked ? <GolfCourseIcon fontSize="small" /> : "."}
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
