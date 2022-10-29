import styles from '../page.module.css';
import Scan from './Scan';
function Page() {
  return (
    <div className={styles.container}>
      <Scan />
    </div>
  );
}

export default Page;
