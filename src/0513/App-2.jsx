import { useRef } from "react"

export default function App() {
    const greenRef = useRef(null);
    const yellowRef = useRef(null);

    const goGreen = () => {
        window.scrollTo({
            top: greenRef.current.offsetTop,
            behavior: 'smooth'  //某些瀏覽器不支援(滑動效果)可以加這行
        })
    }

    const goYellow = () => {
        window.scrollTo({
            top: yellowRef.current.offsetTop,
            behavior: 'smooth'  //某些瀏覽器不支援(滑動效果)可以加這行
        })
    }

    return (
        <>
            <div ref={yellowRef} style={{ height: "1000px", backgroundColor: "yellow" }}>
                <button onClick={goGreen}>green</button>
            </div>
            <div ref={greenRef} style={{ height: "1000px", backgroundColor: "green" }}>
                <button onClick={goYellow}>yellow</button>
            </div>

        </>
    )
}