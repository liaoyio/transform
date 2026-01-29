import ConversionPanel from "@components/ConversionPanel";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import { useSettings } from "@hooks/useSettings";
import * as React from "react";
import { useCallback } from "react";

interface Settings {
  mode: "escape" | "unescape";
}

const formFields = [
  {
    type: InputType.SELECT,
    key: "mode",
    label: "Mode",
    options: [
      { label: "Escape JSON", value: "escape" },
      { label: "Unescape JSON", value: "unescape" }
    ]
  }
];

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

/**
 * Unescapes special characters in a JSON string
 */
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

export default function JsonEscape() {
  const name = "JSON Escape / Unescape";

  const [settings, setSettings] = useSettings(name, {
    mode: "escape"
  });

  const transformer = useCallback(
    async ({ value }) => {
      if (!value.trim()) {
        return "";
      }

      if (settings.mode === "escape") {
        return escapeJson(value);
      } else {
        return unescapeJson(value);
      }
    },
    [settings]
  );

  const getSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => {
      return (
        <Form<Settings>
          title={name}
          onSubmit={setSettings}
          open={open}
          toggle={toggle}
          formsFields={formFields}
          initialValues={settings}
        />
      );
    },
    [settings]
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle={
        settings.mode === "escape" ? "Escaped JSON" : "Unescaped JSON"
      }
      resultLanguage="text"
      editorSettingsElement={getSettingsElement}
      settings={settings}
      resultEditorProps={{
        hasPrettier: false
      }}
    />
  );
}
