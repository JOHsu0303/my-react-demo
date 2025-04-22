import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"


function TodoWrapper() {
    // 因為有N個todo，所以用陣列存放物件資料
    const [todos, setTodos] = useState([
        { content: '停車費', id: Math.random(), isCompleted:false },
        { content: '對發票', id: Math.random(), isCompleted:false },
    ])

    // 建立加入新的todo內容函式
    // 其餘運算子(...名稱)
    const addTodo = (newContent) => {
        setTodos([...todos, { content: newContent, id: Math.random(), isCompleted:false }])
    }

    // 建立刪除todo函式
    // 傳入被刪除的id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter(篩選)方法，保留不被刪除的id
            return todo.id !== id
        }))
    }

    // 切換是否被點擊的狀態
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            // if(todo.id){
            //     return{...todo, isCompleted: !todo.isCompleted}
            // }else{
            //     return todo
            // }
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} delTodo={delTodo} toggleCompleted={toggleCompleted} />  /* 左邊的todo會在Todo.jsx中帶入 */
                })
            }
        </div>
    )
}
export default TodoWrapper