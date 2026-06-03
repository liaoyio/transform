export const metafields = {
  hero: {
    title: "Launch faster",
    subtitle: "Reusable page content for storefront sections",
    image: "https://example.com/hero.png"
  },
  features: [
    {
      title: "Structured content",
      desc: "Keep content blocks predictable."
    },
    {
      title: "Reusable data",
      desc: "Share one JSON source across templates."
    }
  ],
  cta: {
    label: "Shop now",
    url: "/collections/all"
  }
};

export const metafieldsJson = JSON.stringify(metafields, null, 2);

export const json = JSON.stringify(
  {
    id: 1,
    title: "Transform",
    tags: ["json", "typescript", "zod"],
    published: true
  },
  null,
  2
);

export const jsonStringToJson = `{\\n  \\"id\\": 1,\\n  \\"title\\": \\"Transform\\",\\n  \\"published\\": true\\n}`;

export const html = `<section class="hero">
  <h1>Hello Transform</h1>
  <p>Convert HTML snippets to JSX.</p>
  <button type="button">Get started</button>
</section>`;

export const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="48" fill="#0e7ccf" />
  <path d="M38 62h44M62 38v44" stroke="#fff" stroke-width="10" stroke-linecap="round" />
</svg>`;

export const css = `.card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}`;

export const css3 = `.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #0e7ccf;
  color: #ffffff;
  font-weight: 600;
}`;

export const javascript = `const Title = styled.h1({
  fontSize: 32,
  lineHeight: 1.2,
  color: "#1f2937",
});

const Button = css({
  padding: "12px 16px",
  borderRadius: 8,
  backgroundColor: "#0e7ccf",
});`;

export const jsObject = `{
  id: 1,
  title: "Transform",
  enabled: true,
  tags: ["json", "css", "jsx"],
  owner: {
    name: "Frontend Team"
  }
}`;

export const markdown = `# Transform

Convert small code and data snippets without leaving the browser.

- JSON
- JSX
- CSS
- TypeScript`;

export const typescript = `type User = {
  id: number;
  name: string;
  email?: string;
};

export function formatUser(user: User): string {
  return user.email ? \`\${user.name} <\${user.email}>\` : user.name;
}`;

export const typeScriptInterface = `export interface User {
  id: number;
  name: string;
  email?: string;
  roles: string[];
}`;
