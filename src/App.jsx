import { useState } from 'react';
import { TableRow } from './Components/TableRow';
import { PageHeader } from './Layout/PageHeader';
import { PageTitle } from './Layout/PageTitle';
import { Summary } from './Layout/Summary';
import './styles.scss';

export function App() {

    const [cart, setCart] = useState([])

    return (
        <>
            <PageHeader />

            <main>
                <PageTitle title={'Seu carrinho'}/>
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
                                {cart.length === 0 && (
                                    <tr>
                                        <td colSpan='5' style={{textAlign: 'center'}}>
                                            <b>Seu carrinho está vazio</b>
                                        </td>
                                    </tr>
                                )}
                                {cart.map(item => <TableRow key={item}/>)}
                            </tbody>
                        </table>
                    </section>
                    <aside>
                        <Summary />
                    </aside>
                </div>
            </main>
        </>
    )
}
