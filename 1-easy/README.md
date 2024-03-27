## 笔记

- `[K in keyof T]: T[K]` 遍历 对象类型/数组类型
- `[P in K]: T[P]` 根据传入的 K 进行遍历，此时 K 需要满足 `K extends keyof T`
- 遍历时可 `+-` 修饰符 `readonly` 或 `?`，默认为 `+` 省略
- `T[K]` 取出 T 对象 K 属性的类型
- 元组 tuple 就是知道长度以及类型的数组
- 从对象的角度看，元组就是 key 都是数字的对象，所以 `T[number]` 就是取出元组所有元素对应的联合类型
- `type PropertyKey = string | number | symbol`
- 元组特性直接获取长度 `T['length']`
- `as const` 可以理解为 as readonly
- `xxx extends infer xxx ? A : B` 经典判断
- `[infer F, ...infer R]` 没有元素就走 false，TS 也支持扩展运算符
- 泛型下联合类型的分发特性 `A extends B ? true : false`，A 会变成联合类型其中的每一项去分别判断，最后联合返回
- `任意类型 | never = 任意类型`
- PromiseLike 类型是用于表示类似 Promise 的对象的接口，用于兼容不同 Promise 实现
-
