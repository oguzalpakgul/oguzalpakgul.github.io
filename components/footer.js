export const Footer = () => {
  return (
    <footer className="flex items-center sm:justify-center justify-between flex-col-reverse md:flex-row md:justify-between mt-8 py-8 md:mt-20 gap-4">
      <p className="font-mono tracking-tight">
        Made with <span className="text-red-500">&hearts;</span> in Antalya
      </p>
      <div className="flex justify-center items-center gap-2 ">
        <a
          href="https://www.github.com/oguzalpakgul"
          rel="noopener noreferrer"
          target="_blank"
          title="Github"
          className="opacity-70 hover:opacity-100"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            height="2em"
            viewBox="0 0 64 64"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2-1.4-3.5-3.5-4.5-3.5-4.5-2.8-2 .1-2 .1-2 3.1.1 4.8 3.2 4.8 3.2 2.7 4.8 7.3 3.4 9 2.5.3-2 1.1-3.4 2-4.2-6.8-.7-14.1-3.4-14.1-15.2 0-3.4 1.3-6.1 3.2-8.2-.3-.7-1.4-3.9.3-8.2 0 0 2.7-.8 8.6 3.2 2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2 1.7 4.2.7 7.5.3 8.2 2 2.1 3.2 4.9 3.2 8.2 0 11.8-7.3 14.5-14.1 15.2 1.1 1 2.1 3 2.1 5.8 0 4.2-.1 7.5-.1 8.5 0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/oguzalpakgul"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
          className="opacity-70 hover:opacity-100"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            height="2em"
            viewBox="0 0 64 64"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.5 1H5.6C3.1 1 1.1 3 1.1 5.5v53c0 2.4 2 4.5 4.5 4.5h52.7c2.5 0 4.5-2 4.5-4.5V5.4C63 3 61 1 58.5 1zM19.4 53.7h-9.1V24.2h9.1v29.5zm-4.6-33.6c-3 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.2 5.3-5.3 5.3zm39.1 33.6h-9.1V39.4c0-3.4-.1-7.9-4.8-7.9-4.8 0-5.5 3.8-5.5 7.6v14.6h-9.1V24.2h8.9v4.1h.1c1.3-2.4 4.2-4.8 8.7-4.8 9.3 0 11 6 11 14.2v16h-.2z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};
