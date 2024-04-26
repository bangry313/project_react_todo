import './TodoItem.css';
import TodoItem from './TodoItem';

// 각 할 일 항목 목록을 보여주는 컴포넌트
const TodoList = function () {
    return (
        <div className='TodoList'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

export default TodoList;