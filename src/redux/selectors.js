import { createSelector } from 'reselect';

export const todoListSelector = (state) => state.todoList;

export const searchSelector = (state) => state.filters.search;

export const statusSelector = (state) => state.filters.status;

export const prioritySelector = (state) => state.filters.priority;

export const filtersSelector = createSelector(
  todoListSelector,
  searchSelector,
  statusSelector,
  prioritySelector,
  (todoList, search, status, priority) =>
    todoList.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (status !== 'All'
          ? status === 'Completed'
            ? item.completed
            : !item.completed
          : true) &&
        (priority.length ? priority.includes(item.priority) : true)
    )
);
