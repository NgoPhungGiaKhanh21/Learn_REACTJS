import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import Form from "../components/order/Form";
import Content from "../components/order/Content";

const Order = () => {
  return (
    <div className="Order">
      <Header />
      <Form />
      <Content />
      <Footer />
    </div>
  );
};
export default Order;
