import { getAllPosts } from "@/lib/api";
import { BlogNav } from "@/components/blogNav";
import Link from "next/link";
import moment from "moment";
import "moment/locale/tr";

export default async function Page() {
  const posts = getAllPosts();

  function groupPostsByMonthYear(posts) {
    const groupedPosts = {};

    posts.forEach((post) => {
      const date = new Date(post.date);
      const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
      if (!groupedPosts[monthYear]) {
        groupedPosts[monthYear] = [];
      }

      groupedPosts[monthYear].push(post);
    });

    return groupedPosts;
  }

  const groupedPosts = groupPostsByMonthYear(posts);

  return (
    <div className="max-w-2xl mx-auto mt-6 mb-6 ">
      <BlogNav></BlogNav>

      <h1>Blog</h1>
      <h3 className="text-gray-600 mb-10">Son Gönderiler</h3>

      <div>
        {Object.entries(groupedPosts).map(([monthYear, postsInMonthYear]) => (
          <div key={monthYear} className="mt-6">
            <h2>
              {new Date(postsInMonthYear[0].date).toLocaleString("tr-TR", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <ul className="space-y-2 mt-2">
              {postsInMonthYear.map((post, index) => (
                <li key={index}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex w-full min-w-0 cursor-pointer items-center justify-between rounded border border-gray-300 bg-gray-50/40 px-4 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-black"
                  >
                    <span className="line-clamp-1">{post.title}</span>
                    <time className="flex-shrink-0 pl-4 text-xs font-semibold">
                      {moment(post.date).locale("tr").format("D MMM")}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
