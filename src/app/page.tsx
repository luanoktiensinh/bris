import MegaMenu from "@/components/MegaMenu/index";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <MegaMenu />
      </main>
    </div>

  );
}
