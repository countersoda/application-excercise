import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import "@fontsource/open-sans";

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps}></Component>;
};

export default api.withTRPC(App);
