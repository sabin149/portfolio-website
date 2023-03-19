const Footer = () => {
  return (
    <footer className="mt-8 flex h-32 flex-col items-center justify-center bg-[#e6e6e6] py-5 text-gray-600 lg:h-20">
      <div className="flex flex-col gap-[0.015rem]">
        <div className="mt-1 flex flex-row items-center justify-center">
          <a
            href="https://facebook.com"
            className="mr-2 text-gray-500 hover:text-blue-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-8 w-8"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className=" mr-2 text-gray-500 hover:text-sky-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-8 w-8"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className=" mr-2 text-gray-500 hover:text-red-400"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-8 w-8"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center text-base md:text-lg lg:flex-row">
          <p>&copy; 2023. All Right Reserved. </p>
          <p className="mr-1">kritikrawal.com.np | </p>
          <p>Designed & Developed By Kritik Rawal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
