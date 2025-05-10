import Header from "../components/home/Header";
import Banner from "../components/home/CarouselBanner";
import Content from "../components/home/Content";
import Step from "../components/home/Step";
import Order from "../components/home/Order";
import Menu from "../components/home/Menu";
import Choose from "../components/home/Choose";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="pt-20">
        <Banner />
      </div>
      <Content />
      <Step />
      <Order />
      <Menu />
      <Choose />
      <Footer />
    </div>
  );
}

export default Home;
