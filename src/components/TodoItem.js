import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoItem.css';

// 각 Todo 항목에 대한 정보를 보여주는 컴포넌트
const TodoItem = function ( {todo} ) {
    const {id, title, complete} = todo;
    console.log(id, title, complete);
    return (
        <div className='TodoItem'>
            <div className='checkbox'>
                <MdCheckBoxOutlineBlank />
                <div className='text'>{title}</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoItem;