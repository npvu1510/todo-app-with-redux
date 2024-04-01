import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Todo from '../Todo';

import { addItemAction } from '../../redux/actions';
import { filtersSelector } from '../../redux/selectors';

export default function TodoList() {
  console.log('rerender TodoList');

  const dispatch = useDispatch();
  const todoList = useSelector(filtersSelector);

  const [name, setName] = useState('');
  const [priority, setPriority] = useState('High');

  const handleAddClick = (e) => {
    dispatch(addItemAction({ name, priority }));
    setName('');
  };

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            prioriry={item.priority}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={handleNameInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
