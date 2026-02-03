import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";

function unescapeJson(str: string): string {
  return str
    .replace(/\\"/g, '"')
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\b/g, "\b")
    .replace(/\\f/g, "\f")
    .replace(/\\\\/g, "\\"); // Backslash must be last
}

export default function JsonStringToJson() {
  const transformer = useCallback(async ({ value }) => {
    if (!value.trim()) {
      return "";
    }
    return unescapeJson(value);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="String"
      editorLanguage="text"
      editorDefaultValue="jsonStringToJson"
      resultTitle="JSON"
      resultLanguage="json"
      resultEditorProps={{
        hasPrettier: false
      }}
    />
  );
}
