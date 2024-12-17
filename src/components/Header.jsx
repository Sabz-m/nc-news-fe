import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/topics">
          <button>Topics</button>
        </Link>
        <Link to="/articles">
          <button>Articles</button>
        </Link>
      </div>
      <div>
        <Link to="/users">
          <button>Profile</button>
        </Link>
      </div>
    </header>
  );
}
