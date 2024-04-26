import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

// 새로운 Todo 항목을 입력하고 추가할 수 있는 컴포넌트
const TodoInsert = function () {
    return (
        <form className='TodoInsert'>
            <input placeholder='할 일을 입력하세요' />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;