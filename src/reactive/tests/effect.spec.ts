import { reactive } from '../reactive';

describe('reactive', () => {
  it('core', () => {
    const user = reactive({
      name: 'gqq',
      age: 25
    })
    let nextAge = undefined;
    // effect(()=>{
    //   nextAge = user.age
    // })
    const sourceDate = { count: 1 }
    const data = reactive(sourceDate)
    
    expect(data).not.toBe(sourceDate)
    expect(data.count).toBe(1)

  })
})