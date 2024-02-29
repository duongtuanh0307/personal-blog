"use client";
import React, { FC, ReactNode } from "react";
import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

type Props = {
  content: string;
};

const CustomMarkdown: FC<Props> = ({ content }) => {
  function SyntaxHighlightedCode(props: {
    className: string;
    children: ReactNode;
  }) {
    const ref = React.useRef<HTMLElement | null>(null);

    React.useEffect(() => {
      if (ref.current && props.className?.includes("lang-") && hljs) {
        hljs.highlightElement(ref.current);
        ref.current.classList.add("whitespace-pre-wrap", "text-shadow-none");
        ref.current.removeAttribute("data-highlighted");
      }
    }, [props.className, props.children]);

    return <code {...props} ref={ref} />;
  }

  return (
    <Markdown options={{ overrides: { code: SyntaxHighlightedCode } }}>
      {content}
    </Markdown>
  );
};

export default CustomMarkdown;
