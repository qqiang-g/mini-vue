import { tarck } from './effect'
export function reactive (data) {
  // const newData = {}
  // return newData
  return new Proxy(data,{
    get(target, key){
       const value =  Reflect.get(target, key)
       // 收集依赖
       tarck(target, key)
       return value;
    },
    set(target, key, value) {
      const res = Reflect.set(target, key, value)
      // 触发依赖
      return res
    }
  })
}