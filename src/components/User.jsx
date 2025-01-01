import { useEffect, useState } from "react";
import { getUser } from "../api";
import UserCard from "./UserCard";
import { useNavigate } from "react-router";

export default function User({ username, setUsername }) {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log(username);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getUser()
      .then((users) => {
        console.log(users);
        const user = users.find((user) => {
          return user.username === username;
        });
        console.log(user);

        if (user) {
          setUserProfile(user);
        } else {
          setError(`Invalid username: ${username}`);
          setTimeout(() => {
            setUsername(null);
            navigate("/users");
          }, 3000);
        }

        setIsLoading(false);
      })
      .catch((err) => {
        setError(`Error fetching users: ${err.message}`);
        console.error("Error fetching users:", err);
        setIsLoading(false);
      });
  }, [username]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <p>Try again in 3 seconds...</p>
      </div>
    );
  }

  if (!userProfile) {
    return <p>No user found with the username {username}</p>;
  }

  console.log(userProfile);

  return (
    <div>
      <UserCard userProfile={userProfile} />
    </div>
  );
}
