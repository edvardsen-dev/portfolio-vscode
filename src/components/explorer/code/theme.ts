import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export const customTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#09090b",
    backgroundImage: "",
    foreground: "#DCE3EA",
    caret: "#5d00ff",
    selection: "#43AAF955",
    selectionMatch: "#036dd626",
    lineHighlight: "#00000022",
    gutterBackground: "#000000",
    gutterForeground: "#FFFFFF",
  },
  styles: [
    { tag: t.comment, color: "#888888" },
    { tag: t.variableName, color: "#0080ff" },
    { tag: [t.string, t.special(t.brace)], color: "#62c073" },
    { tag: t.number, color: "#FFFFFF" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#f75f8f" },
    { tag: t.operator, color: "#EFEFEF" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#f75f8f" },
    { tag: t.angleBracket, color: "#5c6166" },
    { tag: t.tagName, color: "#DCE3EA" },
    { tag: t.attributeName, color: "#5c6166" },
  ],
});

export const vercelTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#111827", // Darker background
    backgroundImage: "",
    foreground: "#F9FAFB", // Lighter, more readable text
    caret: "#6366F1", // Vercel-like purple/blue
    selection: "#374151", // Muted selection color
    selectionMatch: "#4B5563",
    lineHighlight: "#1F2937", // Slightly lighter than background
    gutterBackground: "#111827", // Match background
    gutterForeground: "#6B7280", // Muted gutter color
  },
  styles: [
    { tag: t.comment, color: "#6B7280" }, // Muted comment color
    { tag: t.variableName, color: "#93C5FD" }, // Lighter blue for variables
    { tag: [t.string, t.special(t.brace)], color: "#A7F3D0" }, // Greenish string
    { tag: t.number, color: "#FDE68A" }, // Yellowish number
    { tag: t.bool, color: "#FDE68A" }, // Yellowish bool
    { tag: t.null, color: "#FDE68A" }, // Yellowish null
    { tag: t.keyword, color: "#C778F0" }, // Purple keywords (Vercel-like)
    { tag: t.operator, color: "#E5E7EB" }, // Lighter operator
    { tag: t.className, color: "#E5E7EB" }, // Lighter className
    { tag: t.definition(t.typeName), color: "#E5E7EB" }, // Lighter definition
    { tag: t.typeName, color: "#C778F0" }, // Purple typeName
    { tag: t.angleBracket, color: "#9CA3AF" }, // Muted brackets
    { tag: t.tagName, color: "#F9FAFB" }, // Lighter tag name
    { tag: t.attributeName, color: "#E5E7EB" }, // Lighter attribute name
  ],
});
