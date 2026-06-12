/**
 * 说说（动态）GitHub Gist 配置
 *
 * 使用 GitHub Gist 作为说说数据的后端存储：
 * - 前端通过 Raw URL 匿名读取 Gist 内容
 * - Admin 页面通过 GitHub API + Token 写入数据
 *
 * 配置步骤：
 * 1. 创建一个 Secret Gist，文件名 moments.json，内容为 []
 * 2. 从 Gist URL 中获取 Gist ID（URL 最后一段）
 * 3. 生成 SHA-256 密码哈希（用于 Admin 页面登录验证）
 */
export const externalMomentsConfig = {
  /** 是否启用说说功能 */
  enable: true,

  /** Gist ID（从 Gist URL 中获取，如 https://gist.github.com/user/THIS_IS_THE_ID） */
  gistId: "1f6118bb02312c183611e9f77c776a15",

  /** Gist 中存储说说数据的文件名 */
  fileName: "moments.json",

  /** Admin 页面登录密码的 SHA-256 哈希值（明文密码不要直接写在这里） */
  adminPasswordHash: "dc93d2eb4092ae36436c506c7ebf407df24e8a7a53270aa4e1b46a7e0f1f3a23",

  /** GitHub Personal Access Token（需要 gist 权限，用于写入数据） */
  githubToken: (typeof process !== "undefined" && process.env && process.env.GITHUB_TOKEN) || "",
};
