import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useReq } from '../utils/http';

const IHttp = () => {
  // const { run } = useReq();
  return <div>请求</div>;
};

// export default IHttp;

const markdown = `
## 插件

- Auto Close Tag
- Auto Import
- Auto Rename Tag
- Bracket Pair Colorizer
- CSS Peek
- ES7 React/Redux/GraphQL/React-Native snippets
- ESLint
- filesize
- Git History
- Git History Diff
- GitLens — Git supercharged
- Highlight Matching Tag
- Markdown All in One
- Path Intellisense
- Prettier - Code formatter
- TODO Highlight
- vscode-icons

## 快捷键

- Cmd + G 跳转
- Opt + 左右方向键 单词间跳转
- Cmd + 箭头

`;

export default () => (
  <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
);
