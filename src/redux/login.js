const initialState = {
  loggedIn: false,   
}

export default function login(state = initialState, action) {
  
  switch (action.type) {
    case 'LOGIN':         
      return {loggedIn: true};
  
    default:
      return state;
  } 
}