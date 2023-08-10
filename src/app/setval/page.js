"use client";

import { useState } from "react";
import { useExample } from "@components/Context/Example";
import { useRouter } from "next/navigation";

const SetValPage = () => {
  const [{}, { setValue }] = useExample();
  const [inp, setInp] = useState("ola");
  const router = useRouter();

  const onClick = () => {
    setValue(inp);
  };
  return (
    <div>
      <input
        style={{ color: "black", backgroundColor: "white" }}
        onChange={(event) => {
          setInp(event.target.value);
        }}
      ></input>
      <br />

      <button onClick={onClick}>Click</button>
      <br />

      <button onClick={() => router.push("/getval")}>getval</button>
      <br />

      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
};

export default SetValPage;
