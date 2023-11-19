import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Stories from "../components/Stories";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <SideBar />
      <div className={styles.main}>
        <Stories />
        <Feed />
      </div>
    </main>
  );
}
