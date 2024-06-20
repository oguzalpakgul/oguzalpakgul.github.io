import { Header } from "@/components/header";
import { BlogSection } from "@/components/blogSection";
const Home = () => {
  return (
    <section className=" flex flex-col mb-10 mt-12  ">
      <Header></Header>
      <div className="max-w-2xl pt-10 text-lg ">
        <p>Merhabalar!</p>
        <p>
          <br /> Ben Oğuzalp. Full-stack developer olarak çalışmaktayım. Yeni
          ürün geliştirmekten ve üretim aşamasında olmaktan her zaman keyif
          almışımdır. Burada sizlere öğrendiğim veya aktarmak istediğim
          bilgilere ulaşabilirsiniz. İyi günler dilerim :)
        </p>

        <BlogSection></BlogSection>
      </div>
    </section>
  );
};

export default Home;
