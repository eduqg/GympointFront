// Faz a requisição ao servidor para criar sessão. Ação do Saga.
export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

// Caso usuário iniciou sessão com sucesso
// Servidor retorna o token de sessão e o usuário e salva na store. Ação do Reducer.
export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

// export function signUpRequest(name, email, password) {
//   return {
//     type: '@auth/SIGN_UP_REQUEST',
//     payload: { name, email, password },
//   };
// }
// Caso criar sessão tenha falhado. Tanto para signIn quanto para signUp.
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
