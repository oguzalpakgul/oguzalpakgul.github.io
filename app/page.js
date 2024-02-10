import Typing from "../components/Typing";

const Home = () => {
  const header_texts = ["Oğuzalp", "@oguzalpakgul"];

  const options = {
    typeSpeed: 100,
    backSpeed: 80,
    cursorChar: "|",
    loop: true,
  };
  return (
    <section className=" flex flex-col mb-28 mt-12  ">
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
      <div className="max-w-2xl pt-10">
        <p>Merhabalar!</p>
        <p>
          <br /> Ben Oğuzalp. Full-stack developer olarak çalışmaktayım.
          Javascript, Python ve Qml kodlama dilleriyle ilgilenmekteyim. Yeni
          ürün geliştirmekten ve üretim aşamasında olmaktan her zaman keyif
          almışımdır. Burada sizlere öğrendiğim veya aktarmak istediğim
          bilgilere ulaşabilirsiniz. Fakat şuan yapım aşamasındayım çok yakında
          :)
          <br />
          <br />
          İyi günler dilerim.
        </p>
      </div>
    </section>
  );
};

export default Home;
