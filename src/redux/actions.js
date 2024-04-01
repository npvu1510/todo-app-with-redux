export const addItemAction = (item) => {
  return { type: 'todoList/addItem', payload: item };
};

export const setSearchAction = (content) => {
  return { type: 'filters/setSearchContent', payload: content };
};

export const setStatusAction = (status) => {
  return { type: 'filters/setStatus', payload: status };
};

export const setPriorityAction = (priority) => {
  return { type: 'filters/setPriority', payload: priority };
};
