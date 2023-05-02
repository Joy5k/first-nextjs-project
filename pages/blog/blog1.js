import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const blog1 = () => {
    return (
        <div  className={`${styles.main}`}>
            <h3>This is the blog 1 page </h3>
            <Link href="blog-info/blogpage1">Blog Page1 in nested route in blog info</Link>
        </div>
    );
};

export default blog1;