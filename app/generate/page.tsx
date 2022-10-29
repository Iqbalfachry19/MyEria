import styles from '../page.module.css';
import Generate from './Generate';
function Page() {
  return (
    <div className={styles.main}>
      <Generate />
    </div>
  );
}

export default Page;
