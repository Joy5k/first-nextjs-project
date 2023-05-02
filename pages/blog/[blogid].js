import { useRouter } from "next/router";

const blogid = () => {
    const router = useRouter();
    const pageId=router.query.blogid
    return (
        <div>
            <h2>this is dynamic page of {pageId } </h2>
        </div>
    );
};

export default blogid;