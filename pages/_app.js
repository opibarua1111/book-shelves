import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "../styles/globals.css";
import Layout from "./component/Layout/Layout";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Layout>
  );
}

export default MyApp;
