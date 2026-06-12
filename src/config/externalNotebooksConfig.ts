/**
 * 笔记本 GitHub Gist 配置
 *
 * 每个笔记本对应一个独立的 Gist，避免单个 Gist 文件过大。
 * 前端通过 Raw URL 匿名读取，Admin 页面通过 GitHub API 写入。
 *
 * 配置步骤：
 * 1. 为每个笔记本创建一个 Secret Gist
 * 2. 文件名统一为 notebooks-entries.json
 * 3. 初始内容为: {"entries":[],"metadata":{"name":"笔记本名","summary":"描述"}}
 */

export interface NotebookTemplate {
  id: string;
  icon: string;
  name: string;
  title: string;
  content: string;
}

export interface NotebookMeta {
  /** 笔记本封面图 URL */
  coverImage?: string;
  /** 笔记本摘要描述 */
  summary?: string;
}

export const externalNotebooksConfig = {
  /** 是否启用笔记本功能 */
  enable: true,

  /** GitHub Personal Access Token（需要 gist 权限，用于写入数据） */
  githubToken: "",

  /**
   * 笔记本 → Gist ID 映射
   * Key: 笔记本名称
   * Value: 对应的 Gist ID
   */
  notebookGists: {
    "每日总结": "b5ee923da3b9a86b0601f9a0400fb6b7",
  } as Record<string, string>,

  /**
   * 笔记本元数据（封面图、摘要等）
   * Key: 笔记本名称（需与 notebookGists 的 key 一致）
   */
  notebookMeta: {
    "每日总结": {
      summary: "记录每天的所思所想",
    },
  } as Record<string, NotebookMeta>,

  /** 快速笔记模板 */
  templates: [
    {
      id: "daily",
      icon: "📅",
      name: "每日总结",
      title: "{name} 每日总结",
      content: "## ✅️ 今天做了\n\n\n## 🤔 今日感悟\n\n\n## ⏰ 明天计划\n\n",
    },
    {
      id: "diary",
      icon: "📔",
      name: "日记",
      title: "{name} 的日记",
      content: "",
    },
    {
      id: "reading",
      icon: "📚",
      name: "读书笔记",
      title: "《{name}》读书笔记",
      content: "## 📖 书籍信息\n\n\n## 📝 核心内容\n\n\n## 💡 个人感悟\n\n",
    },
    {
      id: "idea",
      icon: "💡",
      name: "灵感记录",
      title: "{name}",
      content: "",
    },
    {
      id: "todo",
      icon: "✅",
      name: "待办事项",
      title: "{name} 待办事项",
      content: "- [ ] \n- [ ] \n- [ ] \n",
    },
    {
      id: "blank",
      icon: "📝",
      name: "空白笔记",
      title: "{name}",
      content: "",
    },
  ] as NotebookTemplate[],
};
