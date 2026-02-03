import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import { useSettings } from "@hooks/useSettings";
import React, { useCallback } from "react";

interface Settings {
  format: "template" | "double-quote";
}

const formFields = [
  {
    type: InputType.SELECT,
    key: "format",
    label: "字符串格式",
    options: [
      { label: "模板字符串 (``)", value: "template" },
      { label: "双引号字符串", value: "double-quote" }
    ]
  }
];

/**
 * Escape CSS for use inside JavaScript template literal (backticks)
 */
function toTemplateLiteral(css: string): string {
  return (
    "`" +
    css
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$\{/g, "\\${") +
    "`"
  );
}

/**
 * Escape CSS for use inside JavaScript double-quoted string
 */
function toDoubleQuoteString(css: string): string {
  return (
    '"' +
    css
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/\t/g, "\\t") +
    '"'
  );
}

export default function CssToString() {
  const name = "CSS 转 字符串";

  const [settings, setSettings] = useSettings(name, {
    format: "template"
  });

  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      if (value == null || !String(value).trim()) {
        return "";
      }
      if (settings.format === "template") {
        return toTemplateLiteral(value);
      }
      return toDoubleQuoteString(value);
    },
    [settings]
  );

  const getSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => (
      <Form<Settings>
        title={name}
        onSubmit={setSettings}
        open={open}
        toggle={toggle}
        formsFields={formFields}
        initialValues={settings}
      />
    ),
    [settings]
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="CSS"
      editorLanguage="css"
      editorDefaultValue="css3"
      resultTitle="字符串"
      resultLanguage="javascript"
      editorSettingsElement={getSettingsElement}
      settings={settings}
      editorProps={{
        acceptFiles: "text/css"
      }}
      resultEditorProps={{
        hasPrettier: false
      }}
    />
  );
}
