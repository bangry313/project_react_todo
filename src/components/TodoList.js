import './TodoItem.css';
import TodoItem from './TodoItem';

// 각 할 일 항목 목록을 보여주는 컴포넌트
const TodoList = function ( {todoList} ) {
    return (
        <div className='TodoList'>
            {/* <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem /> */}
            {
                todoList.map(todo => (<TodoItem todo={todo}></TodoItem>))
            }
        </div>
    );
}

export default TodoList;