// 用于收集当前那个数据在收集依赖
let activeEffect;

// 存放依赖的map
const targetMap = new Map()
class ReactiveEffect {
  private _fn:any;
  constructor(fn){
    this._fn = fn
  }
  run () {
    activeEffect = this
    this._fn()
  }
}

export function tarck (target, key) {
  let depsMap = targetMap.get(target) // 获取target的依赖

  // 初始化的时候没有收集依赖需要判断空值
  if(!depsMap){
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  let dep = depsMap.get(key)
  if(!dep){
    dep = new Set()
    depsMap.set(dep)
  }
  dep.add(activeEffect)
};

export function trigger (target, key) {
  let depsMap = targetMap.get(target) // 获取target的依赖
  let dep = depsMap.get(key) 
  for (const effect of dep) {
    effect.run()
    
  }
}



export function effect (fn) {

  const _effecrt = new ReactiveEffect(fn)
  _effecrt.run()
}