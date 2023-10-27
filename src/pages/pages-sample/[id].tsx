import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div>pages/pages-sample/[id].tsx</div>
      <div>id: {router.query.id}</div>
    </div>
  );
};
export default Page;
