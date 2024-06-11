//OtherServicesContainer.jsx

import { useNavigate } from "react-router-dom";

export default function OtherServicesContainer() {
  const navigate = useNavigate();

  const handleHomePageRoute = () => {
    navigate("/");
  };

  return (
    <div className="">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Page under Maintenance!.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, page not available yet. our Developers are working on this
              page!<br></br> You'll find lots to explore on the home page.{" "}
            </p>
            <a
              onClick={handleHomePageRoute}
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
