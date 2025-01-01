export default function UserCard({ userProfile }) {
  return (
    <div>
      <h2>Username: {userProfile.username}</h2>
      <p>Name: {userProfile.name}</p>
      <img src={userProfile.avatar_url} />
    </div>
  );
}
