import Feed from "../components/Feed";
import Stories from "../components/Stories";
import styles from "./HomePage.module.css";
import RightSidebar from "../components/RightSidebar";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <div className={styles.mainArea}>
        <Stories />
        <Feed />
      </div>
      <RightSidebar />
    </main>
  );
}
