"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
export const BlogNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname.split("/").slice(1);

  return (
    <nav className="rounded-lg border mb-10 border-gray-200 bg-gray-50 px-4 py-2 backdrop-blur-3xl">
      <ul className="flex items-center gap-2 font-semibold">
        <li className="flex flex-shrink-0 items-center gap-2">
          <Link className="transition-opacity hover:opacity-80" href="/">
            <img
              src="/man.svg"
              className="h-6 w-6 rounded-full border border-gray-600"
            />
          </Link>

          <span className="font-semibold text-gray-400">/</span>
        </li>
        {pathParts.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Link href={`/${pathParts.slice(0, index + 1).join("/")}`}>
              {item}
            </Link>
            <span className="font-semibold text-gray-400 ">
              {index < pathParts.length - 1 ? "/" : ""}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
