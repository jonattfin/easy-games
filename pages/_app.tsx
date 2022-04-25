import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Link from "next/link";

const DivWithMargin = styled.header`
  margin: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: larger;
`;

const MainCentered = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
`;

const CenteredFooter = styled.footer`
  text-align: center;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <DivWithMargin>
        <nav>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Link href="/">Home</Link>
            </Grid>
            <Grid item xs={4}>
              <Link href="/calculator">Calculator</Link>
            </Grid>
            <Grid item xs={4}>
              <Link href="/minesweeper">Minesweeper</Link>
            </Grid>
          </Grid>
        </nav>
      </DivWithMargin>

      <MainCentered>
        <Component {...pageProps} />
      </MainCentered>
      <CenteredFooter>© 2021 easy-games.com. All rights reserved.</CenteredFooter>
    </Container>
  );
}

export default MyApp;
