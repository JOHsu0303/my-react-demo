import { useReducer } from "react"

// 購物車的加減按鈕！！！
// 設定預設值
export default function Reducer() {
    const initalState = 0;
    // 改變state函式
    const reducer = (state, action) => {
        // 根據傳入的值來判斷要對應的行為
        switch (action) {
            case "add":
                return state + 1;
            case "sub":
                return state - 1;
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initalState);
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={() => dispatch("add")}>+</button>
            <button onClick={() => dispatch("sub")}>-</button>
        </div>
    )
}