import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setUser } from '../redux/slices/userSlice';

const UserProfile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const updateUser = () => {
    dispatch(setUser({ name: 'Nuevo Nombre', email: 'nuevoemail@example.com' }));
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={updateUser}>Actualizar Usuario</button>
    </div>
  );
};

export default UserProfile;
