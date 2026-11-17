import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { LearningMath } from "./learning-math"

const config = await loadQuartzConfig()
config.plugins.transformers.push(LearningMath())
export default config
export const layout = await loadQuartzLayout()
