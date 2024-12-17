import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";

function App() {
  return (
    <section id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<ArticlesList />}></Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
