const HelpPage = () => {
    return (
      <div>
        <div className="p-8">
          <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
            <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
              FAQ
            </h4>
            <p className="text-center text-gray-600 text-sm mt-2">
              Here are some of the frequently asked questions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
              <div className="flex space-x-8 mt-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    What are the benefits of using this app to view my GitHub
                    repositories?
                  </h4>
                  <p className="text-gray-600 my-2">
                    {" "}
                    This app offers several benefits compared to traditional
                    methods of viewing your GitHub repositories. It provides a
                    centralized location to view all your repositories, along with
                    clear organization and easy navigation. Additionally, planned
                    features like search and filter functionality will further
                    enhance searchability and help you find specific repositories
                    more efficiently.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                    title="Read More"
                  >
                    Read More
                  </a>
                </div>
              </div>
  
              <div className="flex space-x-8 mt-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    Do I need to know how to code to use the app?
                  </h4>
                  <p className="text-gray-600 my-2">
                    No, coding knowledge is not required. The app is designed for
                    users of all technical backgrounds to access and manage their
                    GitHub repositories.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                    title="Read More"
                  >
                    Read More
                  </a>
                </div>
              </div>
  
              <div className="flex space-x-8 mt-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    Neque eos, dignissimos provident reiciendis debitis?
                  </h4>
                  <p className="text-gray-600 my-2">
                    Clicking on the repository name in the list will take you to a
                    dedicated page with more information about that particular
                    repository.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                    title="Read More"
                  >
                    Read More
                  </a>
                </div>
              </div>
  
              <div className="flex space-x-8 mt-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    Are there any search or filter options available? (Planned
                    Feature)
                  </h4>
                  <p className="text-gray-600 my-2">
                    Currently, search and filter functionalities are available.
                    However, these features are planned for future updates,
                    allowing you to search by name or filter repositories based on
                    specific criteria.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                    title="Read More"
                  >
                    Read More
                  </a>
                </div>
              </div>
  
              <div className="flex space-x-8 mt-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    Does the app require any special permissions?
                  </h4>
                  <p className="text-gray-600 my-2">
                    The app may require a GitHub personal access token for secure
                    interaction with your account on your behalf. Refer to the
                    app's documentation for secure generation of this token.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                    title="Read More"
                  >
                    Read More
                  </a>
                </div>
              </div>
  
              <div className="flex space-x-8 mt-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    How do I navigate through my repositories?
                  </h4>
                  <p className="text-gray-600 my-2">
                    You can navigate through your repositories using the
                    pagination feature provided in the app.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                    title="Read More"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HelpPage;
  