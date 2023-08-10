"use client";

import { useExample } from "@components/Context/Example";
import { useRouter } from "next/navigation";

const GetValPage = () => {
  const [{ value }] = useExample();
  const router = useRouter();

  return (
    <div>
      <div>{value}</div>
      <br />
      <button onClick={() => router.push("/setval")}>SetVal</button>
      <br />
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
};

export default GetValPage;
