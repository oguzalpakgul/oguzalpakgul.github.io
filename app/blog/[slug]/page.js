import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "./markdown-styles.module.css";
import { BlogNav } from "@/components/blogNav";

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  if (!params) {
    return notFound();
  }
  const { slug } = params;
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <BlogNav></BlogNav>
      <h1 className="text-2xl font-black">{post.title}</h1>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
