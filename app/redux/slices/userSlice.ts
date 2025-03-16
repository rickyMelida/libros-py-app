import { UserState } from '@/models/interfaces/UserState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  userId: '',
  name: '',
  email: '',
  picture: '',
  phoneNumber: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        userId: action.payload.userId,
        name: action.payload.name,
        email: action.payload.email,
        picture: action.payload.picture,
        phoneNumber: action.payload.phoneNumber,
      }
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
