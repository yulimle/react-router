import { act } from 'react-dom/test-utils';

const initState = {
  todoList: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추펴기',
      done: false,
    },
    {
      id: 2,
      text: '프로젝트 완료하기',
      done: false,
    },
  ],
  buyList: ['닌텐도', '자동차'],
  todoListCount: 3,
};

let counts = initState.todoList.length;
initState['nextID'] = counts;

const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

export function create(payload) {
  return { type: CREATE, payload }; //payload:payload
}

export function done(id) {
  return {
    type: DONE,
    id, //id:id
  };
}

export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        // 전개구문이 없으면 리턴값 빼고 사라지게 됨
        ...state,
        // todoList: state.todoList.concat({
        //   id: action.payload.id,
        //   text: action.payload.text,
        //   done: false,
        // }),
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        todoList: state.todoList.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
