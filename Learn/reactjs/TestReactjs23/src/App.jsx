import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import "./App.css";

export const RootContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <RootContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Header />
        <Footer />
      </Layout>
    </RootContext.Provider>
  );
}

export default App;
