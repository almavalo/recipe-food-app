import { beforeEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from 'pinia'
import FilterCategory from "../components/molecules/FilterCategory.vue";
import { useCategoryStore } from '../stores/useCategoryStore'

vi.mock('../../store/useCategoryStore', () => ({
  useCategoryStore: () => ({
    filterByName: vi.fn()
  })
}))

beforeEach(() => {
  setActivePinia(createPinia())
})

describe('FIlter.vue', () => {
  it('render inputs and update model', async ()=> {
    const wrapper = mount(FilterCategory)
    const input = wrapper.find('input')

    await input.setValue('Chicken')
    expect(input.element.value).toBe('Chicken')
  })

  it('calls store.filterByName when input changes', async () => {
  const store = useCategoryStore()
  const spy = vi.spyOn(store, 'filterByName')

  const wrapper = mount(FilterCategory)
  const input = wrapper.find('input')

  await input.setValue('Chicken')
  expect(spy).toHaveBeenCalledWith('Chicken')
})
})