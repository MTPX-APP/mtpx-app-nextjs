
import { appWithTranslation } from 'next-i18next';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import '../styles/reset.scss';
import "../styles/globals.scss";

import MainLayout from "../components/layouts/main";
import DefaultLayout from "../components/layouts/default";
const MyApp = ({ Component, pageProps }) => {
const Layout = Component.Layout || DefaultLayout;

  return (
    <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </MainLayout>
  );
}

export default appWithTranslation(MyApp);
