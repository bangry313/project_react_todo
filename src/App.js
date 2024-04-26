import { useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  // 일정 목록을 저장하기 위한 배열 생성
  const dumyArray = [
    { id: 1, title: '리액트 기초 익히기', complete: true },
    { id: 2, title: '리액트 컴포넌트 스타일링하기', complete: true },
    { id: 3, title: '리액트 일정 관리 애플리케이션 구현', complete: false }
  ];

  // 일정 목록 배열을 state에 초기화 
  const [todoList, setTodoList] = useState(dumyArray);

  // 일정 등록
  const createTodoFire = function(title) {
    // 새로운 일정 객체 생성 후 배열에 추가
    const todo = { id: App.todoId++, title: title, complete: false };
    // state에 설정
    setTodoList([...todoList, todo]);
  }
    
  return (
    <TodoTemplate>
      <TodoInsert eventHandler={ createTodoFire }/>
      <TodoList todoList={todoList}/>
    </TodoTemplate>
  );
}
App.todoId = 3;

export default App;
