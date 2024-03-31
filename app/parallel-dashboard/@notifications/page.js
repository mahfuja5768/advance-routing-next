import wait from "@/app/lib/wait";
import Link from "next/link";

export default async function NotificationsPage() {
  await wait(2000);
//   throw new Error("An error occured");

  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 gap-5 rounded h-[745px] flex items-center justify-center">
  <span>   All NOTIFICATIONS</span><div>
    <Link href={'/parallel-dashboard/seen'} className=" text-blue-400 ">SEEN</Link>
  </div>
    </div>
  );
}
