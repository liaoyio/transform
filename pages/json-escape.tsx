import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";

/**
 * Escapes special characters in a JSON string
 */
function escapeJson(str: string): string {
  return str
    .replace(/\\/g, "\\\\") // Backslash must be first
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    .replace(/\b/g, "\\b")
    .replace(/\f/g, "\\f");
}

export default function JsonEscape() {
  const transformer = useCallback(async ({ value }) => {
    if (value == null || !String(value).trim()) {
      return "";
    }
    return escapeJson(value);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      editorDefaultValue="json"
      resultTitle="String"
      resultLanguage="text"
      resultEditorProps={{ hasPrettier: false }}
    />
  );
}
