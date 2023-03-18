import useCustomEffect from "hooks/useCustomEffect";

const AboutMe = () => {
  useCustomEffect();
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row">
          {/* Left column */}
          <div className="md:w-1/2 md:pr-12">
            <h1 className="mb-8 text-4xl font-bold md:text-5xl">
              Hi, I'm Jane Doe
            </h1>
            <p className="mb-8 text-xl">
              I'm a web developer based in New York City. I specialize in
              creating beautiful and responsive websites using modern web
              technologies such as React, Tailwind CSS, and GraphQL.
            </p>
            <div className="mb-4 flex items-center text-lg text-gray-700">
              <span>Location:</span>
              <span className="ml-2">New York, NY</span>
            </div>
            <div className="mb-4 flex items-center text-lg text-gray-700">
              <span>Website:</span>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                example.com
              </a>
            </div>
          </div>
          {/* Right column */}
          <div className="flex justify-center md:w-1/2 md:justify-end">
            <img
              src={"https://via.placeholder.com/150"}
              alt="User avatar"
              className="w-full rounded-lg object-cover object-center shadow-lg md:w-4/5 lg:w-3/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
