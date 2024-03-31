import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className=" p-12">
    <Link href={'/parallel-dashboard'}>go to parallel-dashboard</Link>
   </div>
  );
}
