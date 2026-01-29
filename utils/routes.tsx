import React from "react";
import flatten from "lodash/flatten";
import find from "lodash/find";

export const categorizedRoutes = [
  {
    category: "JSON",
    content: [
      {
        label: "JSON 转 Metafields",
        path: "/json-to-metafield",
        desc: "Converts JSON to Metafields."
      },
      {
        label: "JSON 转字符串",
        path: "/json-escape",
        desc:
          "Escapes or unescapes a JSON string removing traces of offending characters that could prevent parsing."
      },
      {
        label: "JSON 转 TypeScript",
        path: "/json-to-typescript",
        packageUrl: "https://www.npmjs.com/package/json_typegen_wasm",
        packageName: "json_typegen_wasm"
      },
      {
        label: "JSON 转 Zod Schema",
        path: "/json-to-zod",
        packageUrl: "https://www.npmjs.com/package/json-to-zod",
        packageName: "json-to-zod"
      }
    ]
  },
  {
    category: "Others",
    iconName: "",
    content: [
      {
        label: "Markdown 转 HTML",
        path: "/markdown-to-html",
        packageName: "markdown",
        packageUrl: "https://github.com/evilstreak/markdown-js"
      }
    ]
  },
  {
    category: "JSX",
    content: [
      {
        label: "SVG 转 JSX",
        path: "/",
        packageName: "@svgr/core",
        packageUrl: "https://github.com/smooth-code/svgr",
        title: "Transform | A polyglot web converter."
      },
      {
        label: "HTML 转 JSX",
        path: "/html-to-jsx"
      }
    ]
  },

  {
    category: "CSS",
    content: [
      {
        label: "CSS 转 JS 对象",
        path: "/css-to-js",
        packageName: "transform-css-to-js",
        packageUrl: "https://github.com/transform-it/transform-css-to-js"
      },
      {
        label: "CSS IN JS 转换",
        path: "/object-styles-to-template-literal",
        packageUrl:
          "https://github.com/satya164/babel-plugin-object-styles-to-template",
        packageName: "babel-plugin-object-styles-to-template"
      },
      {
        label: "CSS 转 TailwindCSS",
        path: "/css-to-tailwind",
        packageUrl: "https://github.com/Jackardios/css-to-tailwindcss",
        packageName: "css-to-tailwindcss"
      }
    ]
  },
  {
    category: "JS",
    content: [
      {
        label: "JS 对象转 JSON",
        path: "/js-object-to-json",
        desc: "An online REPL for converting JS Object to JSON."
      },
      {
        label: "JS 对象转 TS",
        path: "/js-object-to-typescript",
        desc: "An online REPL for converting JS Object to Typescript."
      }
    ]
  },
  {
    category: "TS",
    content: [
      {
        label: "TS 转 JavaScript",
        path: "/typescript-to-javascript"
      },
      {
        label: "TS 转 Zod Schema",
        path: "/typescript-to-zod",
        packageName: "ts-to-zod",
        packageUrl: "https://www.npmjs.com/package/ts-to-zod"
      }
    ]
  }
];

export interface Route {
  path: string;
  label: string;
  desc: string;
}

export const routes = flatten(
  categorizedRoutes.map(a =>
    // @ts-ignore
    a.content.map(x => {
      const _label =
        a.category.toLowerCase() !== "others"
          ? `${a.category} ${x.label}`
          : x.label;
      return {
        ...x,
        category: a.category,
        searchTerm: _label,
        desc: x.desc || `An online playground to convert ${_label}`
      };
    })
  )
);

export function activeRouteData(
  pathname
): {
  label: string;
  path: string;
  searchTerm: string;
  desc: string;
  packageUrl?: string;
  packageName?: string;
} {
  return find(routes, o => o.path === pathname);
}
