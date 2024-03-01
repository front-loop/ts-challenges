// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  // 会被应用到联合类型中的每个成员，而不是联合类型本身
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >,
]

// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T
