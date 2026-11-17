# 个人学习库

使用Quartz 5.1.0构建，内容源为content，远程仓库为https://github.com/yyy23-luck/lulula 。

## 日常使用

用Obsidian打开content作为仓库；从index.md开始。模板在90-模板；收集箱在00-收集箱；发布的笔记明确设置publish: true。网页不保存个人答题进度。

## 启动

双击preview.cmd，访问终端显示的本地网址。双击build.cmd构建。首次在另一台电脑部署需安装Node 24与pnpm 11.25.0，运行pnpm install --frozen-lockfile，再运行node quartz/bootstrap-cli.mjs plugin install --from-config。

## 公开发布

GitHub仓库Settings → Pages → Source选择GitHub Actions。提交main分支触发learning-library-pages.yml，成功后预计网址https://yyy23-luck.github.io/lulula/ 。首次部署前需启用Pages。

## 内容说明

首批是现有回归教学的整理版，图表为模拟示意。没有导入原始作业、个人报告或其他课程资料。

## 兼容性

部分原生插件在本机被应用控制策略阻止，因此日期、图片生成等非必需插件关闭；公式使用纯JavaScript KaTeX，样式和字体随站点部署，不依赖外部CDN。

## 维护与授权

学习内容保留引用来源；Quartz与KaTeX的许可文件随源码保留。未发布页面不应包含在公开提交中，仅构建过滤不能替代源码保密。
