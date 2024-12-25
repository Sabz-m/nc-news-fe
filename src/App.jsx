import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import Article from "./components/Article";
import TopicsList from "./components/TopicsList";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");

  return (
    <section id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/articles"
          element={<ArticlesList topic={topic} />}
        ></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
        <Route
          path="/topics"
          element={<TopicsList setTopic={setTopic} />}
        ></Route>
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
