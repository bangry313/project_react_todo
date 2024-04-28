import './TodoItem.css';
import TodoItem from './TodoItem';

// 각 할 일 항목 목록을 보여주는 목록 처리 컴포넌트
const TodoList = function ( {todoList, removeHandler, updateHandler} ) {
    return (
        <div className='TodoList'>
            {/* <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem /> */}
            {
                todoList.map(todo => (<TodoItem key={todo.id} todo={todo} removeHandler={removeHandler} updateHandler={updateHandler}></TodoItem>))
            }
        </div>
    );
}

export default TodoList;