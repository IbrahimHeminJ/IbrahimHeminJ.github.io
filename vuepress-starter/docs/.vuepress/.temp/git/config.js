import { GitContributors } from "D:/IBRAHIM/College junk/Fouth Grade/Web Appliaction/project/vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/IBRAHIM/College junk/Fouth Grade/Web Appliaction/project/vuepress-starter/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
