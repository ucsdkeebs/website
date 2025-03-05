import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import logo from "../../../public/assets/logo.png";
import ProfileIcon from "../../../public/assets/icons/profile.svg";
import { deleteCookie } from "cookies-next/client";
import { PublicProfile } from "@/lib/types/apiResponses";
import { useRouter } from "next/router";
import styles from "./style.module.css";

interface NavbarProps {
  user?: PublicProfile;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const router = useRouter();

  const handleLogOut = () => {
    deleteCookie("USER");
    deleteCookie("ACCESS_TOKEN");
    router.push("/login");
  };

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
      {user ? (
        <div className={styles.profileContainer}>
          <ProfileIcon className={styles.profile} />
          <span className={styles.username}>{user.username}</span>
          <Button onClick={handleLogOut}>Log Out</Button>
        </div>
      ) : (
        <Link href="/login" className={styles.button}>
          Log in
        </Link>
      )}
    </div>
  );
};

export default Navbar;
