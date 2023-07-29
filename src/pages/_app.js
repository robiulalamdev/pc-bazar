import { Footer } from "@/components/shared/Footer";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

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
