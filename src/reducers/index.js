// 初期ステート設定
const initialState = {
  tasks: [],
};

// actionに応じてステート変更
export default function reducer(state = { ...initialState}, action) {
  switch (action.type) {
    case 'ADDTASK': {
      return { tasks: [...state.tasks, action.value] }
    }
    default:
      return state
  };
};