'use client'

import { useRouter } from 'next/navigation';
import styles from './HomeButton.module.scss';

const HomeButton = ({ user }) => {
    const router = useRouter();
    return (
        <div className={styles.flexContainer}>
            <button onClick={() => router.push('/product')} className={styles.button}>
                Order Now
            </button>
            <button onClick={user ? () => router.push('/account') : () => router.push('/sign-in')} className={styles.button}>
                {
                    user ? 'Account' : 'Offers'
                }
            </button>
        </div>
    );
};

export default HomeButton;
