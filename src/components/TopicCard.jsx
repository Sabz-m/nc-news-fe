import { Link } from "react-router-dom";

export default function TopicCard({ topic, setSelectedTopic, setTopic }) {
  const handleClick = () => {
    setTopic(topic.slug);
    setSelectedTopic(topic.slug);
  };

  return (
    <div className="topicCard">
      <h2>Topic name: {topic.slug}</h2>
      <p>Topic description: {topic.description}</p>
      <Link to={`/articles?topic=${topic.slug}`} onClick={handleClick}>
        <button type="button">view {topic.slug} articles</button>
      </Link>
    </div>
  );
}
