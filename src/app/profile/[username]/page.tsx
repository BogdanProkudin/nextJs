import Categories from '@/components/Categories';
import UserInfo from '../../../components/UserInfo';
import styles from './page.module.scss';
import MovieRow from '@/components/MovieRow';
interface IUserData {
  username: string;
}
const getUser = async (username: IUserData) => {
  const BACKEND = 'https://anitype.site/';

  const response = await fetch(`${BACKEND}app2/users/info/${username}`);
  if (!response.ok) {
    console.log('error');
  }
  return response.json();
};

export default async function UserProfile({ params: { username } }: any) {
  const userData = await getUser(username);

  return (
    <div className={styles.userInfoContainer}>
      <UserInfo
        params={{ avatar: userData.avatar, username: userData.username, status: userData.status }}
      />
      <Categories />
      <MovieRow />
      <MovieRow />
    </div>
  );
}
