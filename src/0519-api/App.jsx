import axios from "axios"
import { useEffect, useState } from "react";

export default function App() {
    // https://api.unsplash.com/photos/?client_id=_j0l_LRP6WLaSj-4gWNweW0lJoxJvMveXAKkZW6jcHg
    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "_j0l_LRP6WLaSj-4gWNweW0lJoxJvMveXAKkZW6jcHg";
    const [filterString, setFilterString] = useState('shiba');

    // 存放篩選後的資料
    const [jonsData, setJonsData] = useState([]);

    // 建立分同步方法，取得遠端資料
    const getPhotos = async () => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);

            // 將資料寫入陣列jsonData
            setJonsData(result.data.results);
            console.log(jonsData);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPhotos();
    }, [])



    return (

        <>
            <h1>取得用端資料</h1><hr />


        </>
    )
}