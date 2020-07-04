// viewから呼ばれてreducerに繋ぐ。
// stateの更新処理はreducerに書かれている。
export default {
  addTask: (value) => {
    return { type: 'ADDTASK', value }
  },
};
