'use client'

import { useRouter } from 'next/navigation';
import styles from './HomeButton.module.scss';

const HomeButton = ({ user }) => {
    const router = useRouter();
    return (
        <div className={styles.flexContainer} data-id="orderButton">
            <button onClick={() => router.push('/product')} className={styles.button}>
                Order Now
            </button>
            <button data-id="userButton" onClick={user ? () => router.push('/account') : () => router.push('/sign-in')} className={styles.button}>
                {
                    user ? 'Account' : 'Offers'
                }
            </button>
        </div>
    );
};

export default HomeButton;
