import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="grid h-full w-full place-items-center">
      <Loader2 className="size-4 animate-spin" />
    </div>
  );
}
