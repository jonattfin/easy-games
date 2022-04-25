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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <DivWithMargin>
        <nav>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Link href="/">Home</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="/calculator">Calculator</Link>
            </Grid>
          </Grid>
        </nav>

        <main>
          <Component {...pageProps} />
        </main>
        <footer>© 2021 easy-games.com. All rights reserved.</footer>
      </DivWithMargin>
    </Container>
  );
}

export default MyApp;
