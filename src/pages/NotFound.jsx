import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-textSecondary">
      <div className="text-center rounded-xl flex gap-4 items-center">
        <div className="size-28">
          <img src="/illustration.png" className="w-full" alt="Not found" />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <p className="mt-2 text-lg">Page Not Found</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-nomad-primary text-textWhite px-4 py-2 rounded-lg transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
