import ConversionPanel from "@components/ConversionPanel";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import { useSettings } from "@hooks/useSettings";
import * as React from "react";
import { useCallback } from "react";

interface Metafield {
  namespace: string;
  key: string;
  type: string;
  value: string;
}

interface Settings {
  namespace: string;
  metafieldType: string;
}

const formFields = [
  {
    type: InputType.TEXT_INPUT,
    key: "namespace",
    label: "Namespace"
  },
  {
    type: InputType.TEXT_INPUT,
    key: "metafieldType",
    label: "Metafield Type"
  }
];

export function generateMetafieldsJson(
  data: Record<string, unknown>,
  options: { namespace?: string; type?: string } = {}
): Metafield[] {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return [];
  }

  const namespace = options.namespace ?? "component";
  const type = options.type ?? "json";

  return Object.entries(data).map(([key, val]) => ({
    namespace,
    key,
    type,
    value: typeof val === "string" ? val : JSON.stringify(val)
  }));
}

export default function JsonToMetafield() {
  const name = "JSON to Metafields";

  const [settings, setSettings] = useSettings(name, {
    namespace: "component",
    metafieldType: "json"
  });

  const transformer = useCallback(
    async ({ value }: { value: string }) => {
      const trimmed = value.trim();
      if (!trimmed) return "";

      try {
        const data = JSON.parse(trimmed);
        const result = generateMetafieldsJson(data, {
          namespace: settings.namespace,
          type: settings.metafieldType
        });
        return JSON.stringify(result, null, 2);
      } catch (e) {
        throw new Error(
          e instanceof SyntaxError
            ? "Invalid JSON. Please check your input."
            : (e as Error).message
        );
      }
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
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="Metafields JSON"
      resultLanguage="json"
      editorSettingsElement={getSettingsElement}
      settings={settings}
      resultEditorProps={{
        hasPrettier: false
      }}
    />
  );
}
