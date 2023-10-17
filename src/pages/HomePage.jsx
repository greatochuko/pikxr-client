import Feed from "../components/Feed";
import Stories from "../components/Stories";
import styles from "./HomePage.module.css";
import MainNav from "../components/MainNav";
import RightSidebar from "../components/Sidebar";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <div className={styles.mainArea}>
        {/* <MainNav /> */}
        <Stories />
        <Feed />
      </div>
      <RightSidebar />
    </main>
  );
}
