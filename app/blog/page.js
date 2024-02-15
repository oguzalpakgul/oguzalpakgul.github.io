import { getAllPosts } from "@/lib/api";

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page() {
  const posts = getAllPosts();

  return (
    <div>
      {posts.map((post, index) => (
        <a key={index} href={`/blog/${post.slug}`}>
          <h3>{post.slug}</h3>
        </a>
      ))}
    </div>
  );
}
