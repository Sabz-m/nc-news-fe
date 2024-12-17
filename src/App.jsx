import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import Article from "./components/Article";

function App() {
  return (
    <section id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<ArticlesList />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
