import { TFile } from "@/types";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import InlineCode from "@/components/ui/inline-code";
import { githubDark } from "@uiw/codemirror-theme-github";
import "./styles.css";

interface CodeProps {
  file: TFile | null;
}

const tips = [
  { label: "Show All Commands", shortcut: ["Ctrl", "Shift", "P"] },
  {
    label: "Go to File",
    shortcut: ["Ctrl", "P"],
  },
  {
    label: "Open Chat",
    shortcut: ["Ctrl", "Alt", "I"],
  },
  {
    label: "Open Settings",
    shortcut: ["Ctrl", ","],
  },
  {
    label: "Toggle Terminal",
    shortcut: ["Ctrl", "T"],
  },
];

export default function Code(props: CodeProps) {
  return (
    <div className="h-full">
      <CodeInner {...props} />
    </div>
  );
}

function CodeInner({ file }: CodeProps) {
  if (!file) {
    return (
      <div className="grid place-items-center h-full text-muted-foreground text-sm">
        <ul className="grid gap-4">
          {tips.map((tip) => (
            <li key={tip.label} className="grid grid-cols-2 gap-2">
              <span className="justify-self-end">{tip.label}</span>
              <span>
                {tip.shortcut.map((key, index) => (
                  <span key={key}>
                    <InlineCode>{key}</InlineCode>
                    {index < tip.shortcut.length - 1 && " + "}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <CodeMirror
      className="flex h-full w-full overflow-auto"
      value={file.content}
      theme={githubDark}
      editable={false}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
    />
  );
}
