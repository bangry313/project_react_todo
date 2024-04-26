import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoItem.css';
import React from 'react';

// 각 Todo 항목에 대한 정보를 보여주는 컴포넌트
const TodoItem = function ({ todo, removeHandler, updateHandler }) {
    const { id, title, complete } = todo;
    // console.log(id, title, complete);

    const handleRemoveTodoBtn = function (event) {
        removeHandler(id);
    };

    const handleUpdteTodoBtn = function (event) {
        updateHandler(id);
    };

    return (
        <div className='TodoItem'>
            {/* <div className='checkbox' onClick={handleUpdteTodoBtn}> */}
            <div className={`${complete ? 'checkbox checked' : 'checkbox'}`} onClick={handleUpdteTodoBtn}>
                {/* <MdCheckBoxOutlineBlank /> */}
                { complete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                {/* <MdCheckBox /> */}
                <div className='text'>{title}</div>
            </div>
            <div className='remove' onClick={handleRemoveTodoBtn}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

// export default TodoItem;
// 전달바은 pops가 변경되지 않는경우, 재 렌더링 되지 않도록 React.memo() 메서드 사용
// 컴포넌트 기반 컴포넌트 개발에서 shouldComponentUpdate() 메서드 역할과 같다.
export default React.memo(TodoItem);