## in

遍历联合类型的每一个成员类型

## keyof

将对象类型的所有 key 组成一个联合类型

## []

取出对象的键值类型，`T[K]` 取出 T 对象 K 属性的类型


## tuple

元组就是知道长度以及类型的数组

从对象的角度看，元组就是 key 都是数字的对象，所以 `T[number]` 就是取出元组所有元素对应的联合类型

## PropertyKey

`type PropertyKey = string | number | symbol`
