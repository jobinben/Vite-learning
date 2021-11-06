// 测试ES6模块导入
import {sum} from './common.js'
import xxx from "./second"

console.log(sum(10, 20))

console.log(xxx(10, 20))

// 测试css
import "../style/index.css"
// 测试Less
import "../style/second.less"

// // 测试Vue3
import {createApp} from "vue"
import app from "../component/App.vue"

createApp(app).mount('#app')