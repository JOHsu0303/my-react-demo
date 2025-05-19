import { useState } from "react"
import { createUserWithEmailAndPassword, sighInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./config/firebase";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 查看登入資訊
    console.log(auth?.currentUser?.email);

    //  帳密登入
    const sighIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    // google登入
    const sighInWithGoogle = async () => {

        try {
            await sighInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    // 登出
    const logout = asyns = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div>
                {/* 輸入email */}
                <input type="text" placeholder="請輸入email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* 輸入密碼 */}
                <input type="password" placeholder="請輸入密碼..."
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={sighIn}>帳號登入</button>

                <button onClick={sighInWithGoogle}>Google登入</button>
                <button onClick={logout}>登出</button>
            </div>
        </>
    )
} 