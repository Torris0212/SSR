import { fetchCurrentUser, fetchUsers } from "./state/actions/index";

export const loadUsersData = async (store) => {
  console.log(222);
  return store.dispatch(fetchUsers());
}

export const loadAuthData = async (store) => {
  console.log(1111);
  return store.dispatch(fetchCurrentUser());
}
