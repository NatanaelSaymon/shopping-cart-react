import './styles.scss';
import { X, ArrowRight } from "@phosphor-icons/react";

export function App() {
  return (
    <>
      <header className='header'>
        <h1>Vendor</h1>
      </header>

      <main>
          <div className="page-title">Seu carrinho</div>
          <div className="content">
              <section>
                  <table>
                      <thead>
                          <tr>
                              <th>Produtc</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                              <th>-</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                                  <div className="product">
                                      <div className="product-img">
                                          <img src="https://placehold.co/100x150" alt="" />
                                      </div>
                                      <div className="product-info">
                                          <p className="product-info__name">Nome do produto</p>
                                          <p className="product-info__category">categoria</p>
                                      </div>
                                  </div>
                              </td>
                              <td>$120</td>
                              <td>2</td>
                              <td>
                                  <div className="qty">
                                      <button>-</button>
                                      <span>1</span>
                                      <button>+</button>
                                  </div>
                              </td>
                              <td>
                                  <button className="remove-btn">
                                    <X size={18} />
                                  </button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </section>
              <aside>
                  <div className="box">
                      <header className='header-aside'>Resumo da compra</header>
                      <div className="info">
                          <div><span>Sub-total</span><span>R$ 400</span></div>
                          <div><span>Frete</span><span>Gratuito</span></div>
                          <button>Adicionar cupom de desconto <ArrowRight size={18} /></button>
                      </div>
                      <footer>
                          <span>Total</span><span>R$ 400</span>
                      </footer>
                  </div>
                  <button>Finalizar compra</button>
              </aside>
          </div>
      </main>
    </>
  )
}
