
// app.test.js

let  mockContacts= [{
    id: 1,
    first_name: 'chhatrapal',
    last_name: "jdlfjjd",
    job: '',
    description: ''
  }]

import { describe, it } from "vitest"
import { sortIdByIncreasingOrder, sortIdByDecresingOrder } from "../utils/sort"
describe('sort' , () => {
  it('ascending functiom', () => {
    expect(sortIdByIncreasingOrder(mockContacts)).toBe(mockContacts)
  
  })  
})

describe('sort' , () => {
    it('descending order functiom', () => {
      expect(sortIdByIncreasingOrder(mockContacts)).toBe(mockContacts)
    
    })  
  })


