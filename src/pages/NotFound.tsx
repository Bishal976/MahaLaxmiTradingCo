import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access:", location.pathname);
    toast.error("Page not found: " + location.pathname, {
      description: "We couldn't locate the page you were trying to access.",
    });
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage:
          "url('../assets/page-not-found-bg.avif')",
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-2xl p-8 max-w-md w-full text-center backdrop-blur-sm">
        <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
  