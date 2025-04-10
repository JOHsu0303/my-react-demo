import { useState } from "react";

// 建立元件(字首要大寫)
function Card({ person }) {
    const { name, age } = person
    return (
        <div className="card">
            <div className="card-body">
                {/* 我是react */}
                {/* 一般寫法 */}
                {/* Hi,{person.name} */}
                {/* 解構寫法 */}
                Hi,{name}今年{age}歲
            </div>
        </div>
    )
}

function App() {
    // 解構

    // 取出特定值的作為變數
    // const person={
    //     name:'西勒',
    //     age:'10',
    // }

    // 一般寫法
    // const name=person.name;
    // const age=person.age;
    // console.log(name,age);

    // 物件解構
    // const {name,age}=person;  //等於做完“一般寫法”前兩行的事
    // console.log(name,age);

    // useState - ReactHook
    const [person, setPerson] = useState({
        name: '蛤',
        age: '12'
    });

    return (
        <>
            {/* 前面person => 元件屬性 */}
            {/* 後面person => 變數(可以是任何形式) */}
            <Card person={person}></Card>
            <Card person={person} />
        </>
    )
}
export default App