import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" p-12 flex  gap-5">
      <Link href={"/parallel-dashboard"}>go to parallel-dashboard</Link>
      <Link href={"/folder1"}>go to folder1</Link>
    </div>
  );
}
