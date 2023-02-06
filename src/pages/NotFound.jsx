import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-center py-5">Error 404</h1>
      <Link className="btn btn-danger mb-3" to="/">
        Volver al Home
      </Link>
    </div>
  );
}
