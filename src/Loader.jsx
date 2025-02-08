import { HashLoader } from "react-spinners";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <HashLoader color="#e305bb" />
      </div>

      <div className={styles.loader}>
        <p className={styles.loadertext}>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
