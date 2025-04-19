"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const knownPaths = ["/search", "/issues", "/extensions"];

export default function NotFound() {
  const pathname = usePathname();

  const content = useMemo(() => {
    if (knownPaths.includes(pathname)) {
      return "This section has not been implemented yet.";
    }
    return "These are not the pages you are looking for.";
  }, [pathname]);

  return (
    <div className="grid place-content-center w-full">
      <h2 className="font-bold text-2xl">404 Not Found</h2>
      <p className="text-muted-foreground mb-8">{content}</p>
      <Button asChild variant="outline">
        <Link href="/">
          <Home className="size-4" />
          Return Home
        </Link>
      </Button>
    </div>
  );
}
