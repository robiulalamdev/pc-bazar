import { ToastContainer } from "react-toastify";
import { Footer } from "../components/shared/Footer";
import store from "../redux/store";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </Provider>
    </SessionProvider>
  );
}
