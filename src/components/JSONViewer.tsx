import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { FormValues } from "./TestingForm";
interface Props {
  data: FormValues | null;
}

function JSONViewer({ data }: Props) {
  return (
    <SyntaxHighlighter language="json" style={tomorrow}>
      {JSON.stringify(data, null, 2)}
    </SyntaxHighlighter>
  );
}

export default JSONViewer;
