import { describe, expect, it, vi } from "vitest";
import { mount } from '@vue/test-utils'
import BtnFood from "../components/atoms/BtnFood.vue";

describe('BtnFood.vue', ()=>{
  it('renders the label correctly', () => {
    const wrapper = mount(BtnFood, {
      props: {
        label: 'Ver receta',
        onClick: () => {}
      }
    })
     expect(wrapper.text()).toContain('Ver receta')
  })

  it('call onClick when clicked', async () => {
    const onClick = vi.fn()
    const wrapper = mount(BtnFood, {
      props: {
        label: 'Ver receta',
        onClick
      }
    })
    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})