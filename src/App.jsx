import { Footer } from "./modules/Footer/Footer";
import { Header } from "./modules/Header/Header";
import { Goods } from "./modules/Goods/Goods";
import { Hero } from "./modules/Hero/Hero";
import { Filter } from "./modules/Filter/Filter";
import { Order } from "./modules/Order/Order";
import { Subscribe } from "./modules/Subscribe/Subscribe";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Filter />
        <Goods />
        <Subscribe />
      </main>
      <Footer />
      <Order />
    </>
  );
};
