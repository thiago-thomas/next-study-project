type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
};

export default async function Page() {
  //Fetching data in next
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();

  return (
    <div>
      {posts.map((post: Post) => (
        <div className="p-4 bg-slate-600 m-2 text-white" key={post.id}>
          <h4 className="text-xl">{post.title}</h4>
          <p className="text-lg py-4">{post.content}</p>
          <span className="block">by {post.author}</span>
          <span className="block">at {post.date}</span>
        </div>
      ))}
    </div>
  );
}
