import Link from "next/link";

export const DebugLinks = () => {
  return (
    <div className="flex flex-col underline text-blue-500">
      <Link href="/">/ (root)</Link>
      <Link href="/app-sample">/app-sample</Link>
      <Link href="/app-sample/123">/app-sample/123</Link>
      <Link href="/pages-sample">/pages-sample</Link>
      <Link href="/pages-sample/123">/pages-sample/123</Link>
      <Link href="/samepath">/samepath</Link>
    </div>
  );
};
