import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
// @ts-ignore
export default {
    "/开发文档/": roadmapSideBar,
    // 取消降级，默认根据文章标题渲染侧边栏
    "/": "",
} as SidebarConfig4Multiple;
