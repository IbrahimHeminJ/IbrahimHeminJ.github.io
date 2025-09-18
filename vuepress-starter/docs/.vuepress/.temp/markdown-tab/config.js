import { CodeTabs } from "D:/IBRAHIM/College junk/Fouth Grade/Web Appliaction/project/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_d393f2e20cba9cf917a4920debe5762e/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/IBRAHIM/College junk/Fouth Grade/Web Appliaction/project/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_d393f2e20cba9cf917a4920debe5762e/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/IBRAHIM/College junk/Fouth Grade/Web Appliaction/project/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_d393f2e20cba9cf917a4920debe5762e/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
