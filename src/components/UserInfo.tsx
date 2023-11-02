import Image from 'next/image';
import styles from '../app/profile/[username]/page.module.scss';
export interface IUserInfo {
  params: {
    username: string;
    status: string;
    avatar: string;
  };
}
const UserInfo = ({ params: { username, status, avatar } }: IUserInfo) => {
  const BACKEND = 'https://anitype.site/';
  return (
    <div className={styles.userBlock}>
      <Image
        src={BACKEND + 'app2/media/download?fileName=useravatars/' + avatar}
        alt="avatar"
        height={90}
        width={90}
        className={styles.userAvatar}
      />
      <div className={styles.UserInfoParent}>
        <span>{username}</span>
        <span>Был 5 лет назад</span>
        <span>{status}</span>
        <span>статус</span>
      </div>
    </div>
  );
};

export default UserInfo;
