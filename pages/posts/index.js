import Post from "@/Components/Post/Post";

const posts = ({posts}) => {
    console.log(posts);
    return (
        <div>
            <h3 className="text-2xl font-semibold">The number of posts {posts.length }</h3>
            {
                posts.map(post => <Post post={post}></Post>)
       }
        </div>
    );
};

export default posts;
export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const data = await res.json();
    console.log(data);
    return {
        props: {
           posts: data
       }
    }
}