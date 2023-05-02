
const comments = ({comments}) => {
    return (
        <div>
 {
 comments.map(comment => <h2 key={comment.id} className=" mx-4 mt-10">Comment: {comment.body}</h2>)
}
        </div>
    );
};
export const getServerSideProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await res.json();
    return {
        props: {
            comments:data
        }
    }
}

export default comments;