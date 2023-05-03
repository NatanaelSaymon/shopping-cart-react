import { X } from "@phosphor-icons/react";

const product = [
    {
        "image": "https://placehold.co/100x150",
        "name": "Placa de Video",
        "category": "Hardware"
    }
]

export function TableRow(){
    return(
        <tr>
            <td>
                <div className="product">
                    {product.map(item => {
                        return(
                            <>
                                <div className="product-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="product-info">
                                    <p className="product-info__name">{item.name}</p>
                                    <p className="product-info__category">{item.category}</p>
                                </div>
                            </>
                        )
                    })}
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
    )
}