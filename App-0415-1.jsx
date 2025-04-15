import { useState } from "react";  /* ⭐️打這串const[]=useState，會自動跑出這串 */

function ChildComponent({ propsCount }) {
    return <div>{propsCount}</div>
}

// 子元件
function MyComponent() {
    // let count = 0;  /* js打法 */
    // 使用狀(state)態控制變數
    const [count, setCount] = useState(0);  /* ⭐️ */

    const handleClick = () => {
        // count++;  /* js打法 */
        // 使用useState中的方法，改變count變數值
        setCount(count + 1);  /* 這邊不能用(count++) */
    }

    return (
        <>
            <button onClick={handleClick}>點擊次數：{count}</button>
            <ChildComponent propsCount={count} />  {/* 屬性(propsCount)跟值(count)的名稱通常一樣，因示範所以不同 */}
        </>
    )
}


// 程式進入點
function App() {
    return (
        <>
            {/* 呼叫子元件 */}
            {/* 不同子元件之間的狀態state是互相獨立的，互不影響 */}
            <MyComponent />
            <MyComponent />
            <MyComponent />
        </>
    )
}
export default App