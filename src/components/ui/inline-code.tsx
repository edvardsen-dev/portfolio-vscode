export default function InlineCode({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="bg-muted rounded-[3px] px-1.5 py-0.5 border">
      {children}
    </span>
  );
}
