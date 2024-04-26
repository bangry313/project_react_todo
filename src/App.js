import { useCallback, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


// 테스트를 위한 대량의 더미데이터 생성 및 반환을 위한 임시 함수 정의
const createDummyTodoList = function () {
  const dumyArray = [];
  for (let i = 1; i <= 2500; i++) {
    dumyArray.push({ id: i, title: `해야할 일 : ${i}`, complete: false });
  }
  return dumyArray;
}

function App() {
  console.log("App Called...");
  // 일정 목록을 저장하기 위한 배열 생성
  // const dumyArray = [
  //   { id: 1, title: '리액트 기초 익히기', complete: true },
  //   { id: 2, title: '리액트 컴포넌트 스타일링하기', complete: true },
  //   { id: 3, title: '리액트 일정 관리 애플리케이션 구현', complete: false }
  // ];

  // 일정 목록 배열을 state에 초기화 
  const [todoList, setTodoList] = useState(createDummyTodoList());

  // 일정 등록
  const createTodoFire = useCallback( title => {
    // 새로운 일정 객체 생성 후 배열에 추가
    const todo = { id: App.todoId++, title: title, complete: false };
    // state에 설정
    setTodoList([...todoList, todo]);
  }, []);

  // 일정 제거
  const removeTodoFire = useCallback(id => {
    // 제거 대상이 아닌 todo만 추출하여 새로운 배열 생성
    const removedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(removedTodoList);
  }, []);

  // 일정 수정
  const updateTodoFire = useCallback(id => {
    const updateTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      } else {
        return todo;
      }
    });
    setTodoList(updateTodoList);
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert eventHandler={createTodoFire} />
      <TodoList todoList={todoList} removeHandler={removeTodoFire} updateHandler={updateTodoFire}/>
    </TodoTemplate>
  );
}
App.todoId = 2501;

export default App;
