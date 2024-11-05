import { LuXCircle } from "react-icons/lu";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full space-y-6 text-center">
        <div className="flex justify-center">
          <LuXCircle className="w-16 h-16 text-red-500" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>

        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            Sorry, an unexpected error has occurred.
          </p>

          <div className="bg-gray-50 rounded-md p-4">
            <p className="text-sm text-gray-500 italic">
              {error.statusText || error.message}
            </p>
          </div>
        </div>

        <button>
          <Link
            to="/"
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Go Back Home
          </Link>
        </button>
      </div>
    </div>
  );
}
