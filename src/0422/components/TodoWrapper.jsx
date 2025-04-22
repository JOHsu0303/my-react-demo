import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"


function TodoWrapper() {
    // 因為有N個todo，所以用陣列存放物件資料
    const [todo, setTodos] = useState([
        { content: '停車費', id: Math.random() },
        { content: '對發票', id: Math.random() },
    ])

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm />
            {
                todo.map((todo, index) => {
                    return <Todo todo={todo} key={todo.id} />  /* 左邊的todo會在Todo.jsx中帶入 */
                })
            }
        </div>
    )
}
export default TodoWrapper