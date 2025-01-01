import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import Footer from "./components/Footer";
import Article from "./components/Article";
import TopicsList from "./components/TopicsList";
import { useState } from "react";
import PageDoesNotExist from "./components/PageDoesNotExist";
import Profile from "./components/Profile";

function App() {
  const [username, setUsername] = useState(null);
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
        <Route
          path="/articles/:article_id"
          element={<Article username={username} />}
        ></Route>
        <Route
          path="/topics"
          element={<TopicsList setTopic={setTopic} />}
        ></Route>
        <Route path="/*" element={<PageDoesNotExist />}></Route>
        <Route
          path={"/users"}
          element={<Profile username={username} setUsername={setUsername} />}
        ></Route>
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
