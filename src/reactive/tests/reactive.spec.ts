import { reactive } from '../reactive';

describe('reactive', () => {
  it('core', () => {
    const sourceDate = { count: 1 }
    const data = reactive(sourceDate)
    
    expect(data).not.toBe(sourceDate)
    expect(data.count).toBe(1)

  })
})