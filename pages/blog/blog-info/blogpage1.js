import Head from "next/head";
import Link from "next/link";

const blogpage1 = () => {
    return (
        <div>
            <Head>
                <title>Blog-page1</title>
            </Head>
            <h2>this is blogpage1</h2>
            <Link href="/">Home</Link>
        </div>
    );
};

export default blogpage1;