let weightState = 100;
const today = new Date();

export default function weight(state = weightState, action) {
  if (action.type === '증가') {
    state += today.getMonth() + 1;
    return state;
  } else if (action.type === '감소') {
    state -= today.getDate();
    return state;
  } else {
    return state;
  }
}
