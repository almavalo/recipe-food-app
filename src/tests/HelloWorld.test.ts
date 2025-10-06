// tests/HelloWorld.test.ts
import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'
import { expect, test } from 'vitest'


test('renders properly', () => {
  const wrapper = mount(HelloWorld)
  expect(wrapper.text()).toContain('Hello world!')
})
