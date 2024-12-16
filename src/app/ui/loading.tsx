import styles from '../../app/styles/Header.module.css'
import beard from '../../../public/images/loading_beard.png'
import Image from 'next/image';

const LoadingPage = () => {
    return ( 
        <div className={styles.loading}>
        <h1>Loading...</h1>
        <div className={styles.fill}>
        <Image
        src={beard}
        width={200} height={200}
        alt='loading-screen-image'
        ></Image>
        </div>
        </div>
     );
}
 
export default LoadingPage;