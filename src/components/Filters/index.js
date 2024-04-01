import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import filtersSlice from './filterSlice';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();

  const [searchContent, setSearchContent] = useState('');
  const [status, setStatus] = useState('All');

  const handleSearchChange = (e) => {
    setSearchContent(e.target.value);
    // dispatch(setSearchAction(e.target.value));
    dispatch(filtersSlice.actions.setSearchContent(e.target.value));
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    // dispatch(setStatusAction(e.target.value));
    dispatch(filtersSlice.actions.setStatus(e.target.value));
  };

  const handlePriorityChange = (value) => {
    // dispatch(setPriorityAction(value));
    dispatch(filtersSlice.actions.setPriority(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchContent}
          onChange={handleSearchChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
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
      </Col>
    </Row>
  );
}
