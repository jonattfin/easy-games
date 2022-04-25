import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

import styled from "@emotion/styled";

const FirstButtonOperation = styled(Button)`
  background-color: yellow;
`;

const SecondButtonOperation = styled(Button)`
  background-color: aliceblue;
`;

export default function Component() {
  const [value, setValue] = useState<number>(0);
  const [operations, setOperations] = useState<string[]>([]);

  const onValueClicked = (newValue: number) => setValue(value * 10 + newValue);
  const onOperationClicked = (operation: string) => {
    const array: string[] = [...operations, operation];
    setOperations(array);
  };

  const onCancelClicked = () => setValue(0);

  return (
    <Container maxWidth="xs">
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            value={value}
            disabled
            label="Result"
          />
        </Grid>
        <Grid item xs={6}>
          <SecondButtonOperation
            fullWidth
            variant="outlined"
            onClick={() => onCancelClicked()}
          >
            C
          </SecondButtonOperation>
        </Grid>
        <Grid item xs={3}>
          <SecondButtonOperation fullWidth variant="outlined">
            %
          </SecondButtonOperation>
        </Grid>
        <Grid item xs={3}>
          <FirstButtonOperation
            fullWidth
            variant="outlined"
            onClick={() => onOperationClicked("/")}
          >
            /
          </FirstButtonOperation>
        </Grid>

        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(7)}
          >
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(8)}
          >
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(9)}
          >
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <FirstButtonOperation
            fullWidth
            variant="outlined"
            onClick={() => onOperationClicked("x")}
          >
            x
          </FirstButtonOperation>
        </Grid>

        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(4)}
          >
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(5)}
          >
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(6)}
          >
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <FirstButtonOperation
            fullWidth
            variant="outlined"
            onClick={() => onOperationClicked("-")}
          >
            -
          </FirstButtonOperation>
        </Grid>

        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(1)}
          >
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(2)}
          >
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(3)}
          >
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <FirstButtonOperation
            fullWidth
            variant="outlined"
            onClick={() => onOperationClicked("+")}
          >
            +
          </FirstButtonOperation>
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onValueClicked(0)}
          >
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <SecondButtonOperation fullWidth variant="outlined">
            .
          </SecondButtonOperation>
        </Grid>
        <Grid item xs={3}>
          <FirstButtonOperation fullWidth variant="outlined">
            =
          </FirstButtonOperation>
        </Grid>
      </Grid>
    </Container>
  );
}
