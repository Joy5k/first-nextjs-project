import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
    return (
      <div className={`${styles.main}`}>
        <Head><title>Blog-page</title></Head>
        <h1>This is blog page</h1>  
        <Link href="/blog/blog1">
        Blog page 1
        </Link>
        </div>
    );
};

export default Blog;<h1>This is blog page</h1>