import ArticlesList from "./ArticlesList";

export default function Home({ setUsername }) {
  return (
    <section id="home">
      <h1>Welcome to NC News!</h1>
      <ArticlesList />
    </section>
  );
}
