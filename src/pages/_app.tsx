import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps}></Component>;
};

export default api.withTRPC(App);
