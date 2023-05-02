import Post from "@/Components/Post/Post";

const postDetails = ({ post }) => {
    console.log(post);
    return (
        <div>
           <div className="card mt-10 mx-10   bg-base-300 shadow-xl">
                <div className="card-body">
                    <p>Post Id:{post.id }</p>
                    <h2 className="card-title">Title {post?.title }</h2>
                    <p>{post?.body }</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};
export const getStaticProps = async (context) => {
    const {params}=context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await res.json();
    console.log(data);
    return {
        props: {
           post: data
       }
    }
}


export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`,
            }
        }
      
    })
    return {
        paths,
        fallback:false,
    }
}

export default postDetails;
