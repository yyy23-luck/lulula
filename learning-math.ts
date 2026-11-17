import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import type { QuartzTransformerPluginInstance } from "./quartz/plugins/types"

// KaTeX is pure JavaScript: no Typst or native image library is needed.
export function LearningMath(): QuartzTransformerPluginInstance {
  return {
    name: "LearningMath",
    markdownPlugins: () => [remarkMath],
    htmlPlugins: () => [[rehypeKatex, { throwOnError: false, strict: "warn" }]],
  }
}
