import { useEffect, useState } from "react";

const HEADER_HEIGHT = 35;
const TAB_HEIGHT = 41;

export function useEditorHeight() {
  const [editorHeight, setEditorHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const fullHeight = window.innerHeight;
      setEditorHeight(fullHeight - HEADER_HEIGHT - TAB_HEIGHT);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { editorHeight };
}
