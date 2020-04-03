const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const initialState = {
  users: [
    {
      id: 1,
      name: "Dimych",
      surname: "K.",
      country: "Belarus",
      city: "Minsk",
      status: "I am looking for a job right now",
      avatar: "https://via.placeholder.com/150",
      followed: false
    },
    {
      id: 2,
      name: "Andrew",
      surname: "K.",
      country: "Ukraine",
      city: "Kiev",
      status: "I like football",
      avatar: "https://via.placeholder.com/150",
      followed: false
    },
    {
      id: 3,
      name: "Sveta",
      surname: "K.",
      country: "Belarus",
      city: "Minsk",
      status: "I am so pretty",
      avatar: "https://via.placeholder.com/150",
      followed: false
    },
    {
      id: 4,
      name: "Sasha",
      surname: "K.",
      country: "Belarus",
      city: "Minsk",
      status: "I am free to help you",
      avatar: "https://via.placeholder.com/150",
      followed: false
    }
  ],
  usersCount: 4
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    default:
      return state;
  }
};

export const followAC = id => ({ type: FOLLOW, id });
export const unfollowAC = id => ({ type: UNFOLLOW, id });

export default usersReducer;
