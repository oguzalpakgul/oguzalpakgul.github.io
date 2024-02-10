import { Header } from "@/components/header";

const Home = () => {
  return (
    <section className=" flex flex-col mb-28 mt-12  ">
      <Header></Header>
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
