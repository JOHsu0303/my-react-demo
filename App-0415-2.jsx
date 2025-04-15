import { useState } from 'react'
import p1 from './imges/01.jpg'
import p2 from './imges/02.jpg'


function App() {
    // 圖片陣列
    const arrPhotos = [p1, p2];
    // 目前圖片的state，預設為第一張圖的索引
    const [currentImg, setCurrenImg] = useState(0);
    return (
        <>
            <div className="main">
                {/* 縮圖區 */}
                <div>
                    {/* <img src={p1} alt="" width="100" /> */}
                    {/* <img src={p2} alt="" width="100" /> */}

                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img
                                    key={index} src={photo} alt="" width={100}
                                    // 當滑鼠碰到時，取得目前圖片的索引編號，透過setCurrenImg方法更改
                                    onMouseOver={e => setCurrenImg(index)}
                                    // 變更滑鼠得形狀為手型icon
                                    style={{ cursor: "pointer" }}
                                />
                            )
                        })
                    }
                </div>
            </div>

            {/* 放大圖區 */}
            <div>
                <img src={arrPhotos[currentImg]} alt="" width={300} />
            </div>
        </>
    )
}
export default App