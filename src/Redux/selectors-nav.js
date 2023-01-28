export const selectLogIn = store => store.auth.isLoggedIn;

export const selectUser = store => store.auth.user.email;
