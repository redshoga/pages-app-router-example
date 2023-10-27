"use client";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();

  return (
    <div>
      <div>app/app-sample/[id]/page.tsx</div>
      <div>id: {params?.id}</div>
    </div>
  );
};
export default Page;
