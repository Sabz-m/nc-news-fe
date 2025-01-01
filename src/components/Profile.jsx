import SearchForm from "./SearchForm";
import User from "./User";

export default function Profile({ setUsername, username }) {
  const handleClick = () => {
    setUsername(null);
  };

  if (!username) {
    return (
      <div>
        <h2>Profile</h2>
        <div>
          <h3>Enter your username to view your profile</h3>
          <SearchForm setUsername={setUsername} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleClick}>Sign out</button>
      <User username={username} setUsername={setUsername} />
    </div>
  );
}
