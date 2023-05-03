import { ArrowRight } from "@phosphor-icons/react";

export function Summary(){
    return(
        <>
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
        </>
    )
}