import Notifications from "../components/Notifications";
import Quiz from "../components/Quiz";
import Assignments from "../components/Quiz";

export default function DashboardPage() {
  return (
    <>
      <Assignments />
      <Notifications />
      <Quiz />
    </>
  );
}
