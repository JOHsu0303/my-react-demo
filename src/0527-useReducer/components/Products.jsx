import { useContext } from "react"
import productsData from "../data/productData"
import { CartContext } from "../../0527-useReducer/store";

export default function Products() {
    const [state, dispatch] = useContext(CartContext);

    return (
        <>
            {/* 內層格線 */}
            <div className="row row-cols-3 g-3">
                {
                    productsData.map((item) => {
                        return (
                            <div className="col" key={item.id}>
                                <div className="card">
                                    {/* 圖片來源請自行到產品資料檔複製 */}
                                    <img src={item.img}
                                        className="card-img-top"
                                        alt="..." />
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            {item.title}
                                            <span className="float-end">NT${item.price}</span>
                                        </h6>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary w-100"
                                            onClick={(e) => {
                                                dispatch({
                                                    type: 'ADD_TO_CART',
                                                    payload: {
                                                        ...item,
                                                        quantity: 1,
                                                    },
                                                })
                                            }}
                                        >
                                            加入購物車
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}