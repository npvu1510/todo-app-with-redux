import { useEffect } from 'react';

import { Typography, Divider } from 'antd';

import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

import './fakeApi';
import { useDispatch } from 'react-redux';
import { fetchTodosThunk } from './components/TodoList/todoListSlice';

const { Title } = Typography;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
