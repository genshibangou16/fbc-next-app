import type { Qiita } from "../../components/qiita";

export default function StaticPage({ posts }: { posts: Qiita[] }) {
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
              <a
                className="text-blue-600 underline"
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://qiita.com/api/v2/items?query=next.js");
  const posts: Qiita[] = await res.json();
  return {
    props: {
      posts,
    },
  };
}
