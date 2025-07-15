import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>Looks like the page you're trying to access doesn't exist.</p>
        <Link to="/" className="btn">← Back to Home</Link>
      </div>
    </section>
  );
}

export default NotFound;
