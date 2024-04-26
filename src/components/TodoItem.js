import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoItem.css';

// 각 Todo 항목에 대한 정보를 보여주는 컴포넌트
const TodoItem = function () {
    return (
        <div className='TodoItem'>
            <div className='checkbox'>
                <MdCheckBoxOutlineBlank />
                <div className='text'>해야할 일</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoItem;