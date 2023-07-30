import { Footer } from "../components/shared/Footer";
import store from "../redux/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </Provider>
  );
}
