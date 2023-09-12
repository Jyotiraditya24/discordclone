import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h3>This is a protected Route</h3>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
