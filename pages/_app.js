import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/Store"; // Import persistor
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>NexusChat</title>
      </Head>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
