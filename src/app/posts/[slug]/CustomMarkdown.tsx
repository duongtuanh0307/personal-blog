'use client'
import React, { FC, ReactNode } from "react";
import Markdown from "markdown-to-jsx";

declare global {
    interface Window {
      hljs: any;
    }
  }

type Props = {
    content: string;
}
  
const CustomMarkdown: FC<Props> = ({content}) => {
    function SyntaxHighlightedCode(props: {className: string, children: ReactNode}) {
        const ref = React.useRef<HTMLElement|null>(null)
      
        React.useEffect(() => {
          if (ref.current && props.className?.includes('lang-') && window.hljs) {
            window.hljs.highlightElement(ref.current)
      
            ref.current.removeAttribute('data-highlighted')
          }
        }, [props.className, props.children])
      
        return <code {...props} ref={ref} />
      }
  
    return (
        <Markdown options={{overrides: {code: SyntaxHighlightedCode}}}>{content}</Markdown>
    )
};

export default CustomMarkdown;