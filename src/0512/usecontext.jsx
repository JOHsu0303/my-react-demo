import { div } from "motion/react-client";
import { createContext, useContext, useState } from "react"

function App() {

    // 建立共用環境區
    const UserContext = createContext({});
    // 建立使用者變數
    const [username, setUsername] = useState('');
    // 建立登入扭的控制
    const [isLogin, setIsLogin] = useState(false);

    // 建立登入元件
    const LoginForm = () => {
        // 因為要被放在共用區，所以要搬到App元件用
        // const [username, setUsername] = useState('');
        // 從共用區useContext從共用區username, setUsername
        const { username, setUsername, setIsLogin } = useContext(UserContext);
        return (
            <>
                <label htmlFor="username">使用者名稱：</label>
                <input
                    type="text"
                    id="username"
                    placeholder="請輸入使用者名稱"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="button" onClick={() => { setIsLogin(true) }}>登入</button>
            </>
        )
    }

    // 登入後的歡迎元件
    const Greeting = () => {
        // 從共用區userContext取得username
        const { username } = useContext(UserContext);
        return (
            <div>
                Hi, {username}
            </div>
        )
    }



    return (
        <>
            <h1>useContext</h1><hr style={{ marginBottom: "50px" }} />
            <UserContext.Provider value={{ username, setUsername, setIsLogin }}>
                {/* 使用者登入前 */}
                {/* <LoginForm /> */}
                {/* <br /> */}
                {/* 使用者登入後 */}
                {/* <Greeting /> */}


                {/* 將原本的架構改成三元運算子 */}
                {
                    isLogin ? <Greeting username={username}/> : <LoginForm />
                }
            </UserContext.Provider>
        </>
    )


}
export default App