import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export const customTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#09090b",
    backgroundImage: "",
    foreground: "#fafafa",
    caret: "#ff0000",
    selection: "#232323",
    selectionMatch: "#f05b8d",
    lineHighlight: "#232323",
    gutterBackground: "#09090b",
    gutterForeground: "#626262",
  },
  styles: [
    { tag: t.comment, color: "#626262" },
    { tag: t.variableName, color: "#5fa1f7" },
    { tag: [t.string, t.special(t.brace)], color: "#62c073" },
    { tag: t.number, color: "#5fa1f7" },
    { tag: t.bool, color: "#5fa1f7" },
    { tag: t.null, color: "#5fa1f7" },
    { tag: t.keyword, color: "#f05b8d" },
    { tag: t.operator, color: "#EFEFEF" },
    { tag: t.className, color: "#f05b8b" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#f75f8f" },
    { tag: t.angleBracket, color: "#f05b8d" },
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
