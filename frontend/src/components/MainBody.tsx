import { motion } from "framer-motion"

const MainBody = () => {
  function clickForm() {
    window.location.href = "/form";
  }

  const text = "Lorem ipsum odor amet, consectetuer adipiscing elit. Cras consectetur sagittis neque cras vulputate vulputate risus. Nec mi vehicula gravida lacus hendrerit class mauris vestibulum. Platea nullam risus vestibulum habitasse felis duis dictum.".split(" ");

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        {/* <div className="bg-gradient-to-r from-white-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-red-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-green-900/70 dark:to-blue-900/70"></div> */}
      </div>

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-green-700">
                Crop Yield Solutions
              </h1>
            </div>

            <div className="App py-4">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <a
                onClick={clickForm}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 focus:"
                href="#"
              >
                Get started
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
