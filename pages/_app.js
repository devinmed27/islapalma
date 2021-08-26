// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import "../styles/globals.scss";
import Layout from "../components/Layout/Layout";


export const URL = 'http://localhost:3000'

function MyApp({ Component, pageProps }) {
  return (
    <Layout cart='cart'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
