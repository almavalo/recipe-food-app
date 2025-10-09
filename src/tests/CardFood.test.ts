import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import CardFood from "../components/organisms/CardFood.vue";

const push = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push
  })
}))

const mealMock = {
  idMeal: '12345',
  strMeal: 'Arepa Reina Pepiada',
  strMealThumb: 'https://example.com/arepa.jpg',
  strCategory: 'Venezuelan'
}

describe('CardFood.vue', () => {
  it('renderize name', () => {
    const wrapper = mount(CardFood, {
      props: {
        meal: mealMock
      }
    })

    expect(wrapper.text()).toContain('Arepa Reina Pepiada')
    expect(wrapper.text()).toContain('Venezuelan')

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe(mealMock.strMealThumb)
    expect(img.attributes('alt')).toBe(mealMock.strMeal)
  })

  it('calls router.push with correct params when button is clicked', async () => {
    const wrapper = mount(CardFood, {
      props: {
        meal: mealMock
      }
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(push).toHaveBeenCalledWith({
      name: 'recipe',
      params: { id: '12345' }
    })
  })
})
