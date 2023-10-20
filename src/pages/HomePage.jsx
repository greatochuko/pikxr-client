import Feed from "../components/Feed";
import Stories from "../components/Stories";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.homepage}>
      <Stories />
      <Feed />
    </main>
  );
}
