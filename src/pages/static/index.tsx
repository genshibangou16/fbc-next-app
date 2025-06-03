import Link from "next/link";

type Post = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  comments_count: number;
  likes_count: number;
};

export default function StaticPage({ posts }: { posts: Post[] }) {
  return (
    <table className="mt-16">
      <thead>
        <tr>
          <th>Title</th>
          <th>Created At</th>
          <th>Likes Count</th>
          <th>Comments Count</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.created_at}</td>
            <td>{post.likes_count}</td>
            <td>{post.comments_count}</td>
            <td>
              <Link className="text-blue-600 underline" href={post.url}>
                {post.url}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://qiita.com/api/v2/items?query=next.js");
  const posts: Post[] = await res.json();
  return {
    props: {
      posts,
    },
  };
}
