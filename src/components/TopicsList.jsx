import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

export default function TopicsList({ setTopic }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((topics) => {
        console.log(topics);
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.error("Topic does not exist", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Topic does not exist</p>;
  }

  return (
    <div>
      <p>TopicList</p>
      <ul>
        {topics.map((topic, index) => (
          <TopicCard
            key={index}
            topic={topic}
            setSelectedTopic={setSelectedTopic}
            setTopic={setTopic}
          />
        ))}
      </ul>
    </div>
  );
}
