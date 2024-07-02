import { goodsArray } from "../../goodsArray";
import { Cart } from "../Cart/Cart";
import { Product } from "../Product/Product";

export const Goods = () => (
  <section className="goods">
    <div className="container goods__container">
      <div className="goods__box">
        <h2 className="goods__title">Цветы</h2>

        <ul className="goods__list">
          {goodsArray.map((item) => (
            <li className="goods__item" key={item.id}>
              <Product className='goods__card' {...item} />
            </li>
          ))}
        </ul>
      </div>

      <Cart />
    </div>
  </section>
);
