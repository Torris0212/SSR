import { FETCH_USERS } from '../actions/index';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

export default usersReducer;