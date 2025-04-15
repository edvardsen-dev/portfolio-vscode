import { ResizableHandle, ResizablePanel } from "./ui/resizable";

export default function Sidebar({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <ResizablePanel id={id} order={0} defaultSize={15} minSize={8}>
        <div className="border-r h-full">{children}</div>
      </ResizablePanel>
      <ResizableHandle />
    </>
  );
}
