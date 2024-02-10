import Typing from "../components/Typing";
export const Header = () => {
  const header_texts = ["Oğuzalp", "@oguzalpakgul"];
  const options = {
    typeSpeed: 100,
    backSpeed: 80,
    cursorChar: "|",
    loop: true,
  };
  return (
    <nav className=" flex justify-between flex-row gap-4">
      <div className="flex flex-row gap-4">
        <img
          src="/man.svg"
          width="80"
          height="80"
          className="flex-shrink-0"
        ></img>
        <h1 className="font-mono text-2xl font-extrabold flex items-center">
          <Typing options={{ ...options, strings: header_texts }} />
        </h1>
      </div>
    </nav>
  );
};
