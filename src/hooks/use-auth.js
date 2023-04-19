import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

// для удобства работы с редаксом как и с контекстом делал
// !!email - превращаю в булевое значение
