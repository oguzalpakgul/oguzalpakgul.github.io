import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import moment from "moment";
import "moment/locale/tr";

export const BlogSection = () => {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, 3);

  return (
    <section className="my-8">
      {posts && posts.length > 0 && (
        <>
          <h2 className="mb-2 text-xl font-bold">Son Gönderiler</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {posts.map((post, index) => (
              <li key={index}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group h-20 inline-block w-full cursor-pointer rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="line-clamp-1 text-sm font-semibold">
                      {post.title}
                    </h2>
                    <time className="ml-2 flex-shrink-0 text-xs font-semibold opacity-80 transition-opacity group-hover:opacity-100">
                      {moment(post.date).locale("tr").format("D MMM YY")}
                    </time>
                  </div>
                  <p className="line-clamp-2 text-xs opacity-80">
                    {post.short_description}
                  </p>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="group items-center h-20 inline-block w-full cursor-pointer rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black"
              >
                <div className="flex items-center justify-between">
                  <h3 className="line-clamp-1 text-sm font-semibold">
                    Daha fazlasını okumak ister misiniz?
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default BlogSection;
