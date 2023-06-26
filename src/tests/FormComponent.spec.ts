import { describe, it, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';

import FormComponent from '@/components/FormComponent.vue';



describe('Form Component Tests', () => {

  it("renders the form", () => {
  const wrapper = mount(FormComponent);

    expect(wrapper.find('form').exists()).toBe(true)
  })


  it('enables the submit button when the form is valid', async () => {
  const wrapper = mount(FormComponent, {
    props: {
      username: '',
      lastname: '',
      age: 0,
      isChecked: false
    }
  });

    await wrapper.setProps({
      username: 'John',
      lastname: 'Doe',
      age: 20,
      isChecked: true
    })

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.attributes('disabled')).toBeDefined();
  })


  it('Doesnt render checkbox if person is an adult', () => {
    const wrapper = shallowMount(FormComponent, {
      props: {
        age: 25
      }
    })

    const checkboxInput = wrapper.find('input[type="checkbox"]')
    expect(checkboxInput.exists()).toBe(false)
  })

  it('Renders the checkbox if the person is underaged', () => {
    const wrapper = shallowMount(FormComponent)

    const checkboxInput = wrapper.find('input[type="checkbox"]')
    expect(checkboxInput.exists()).toBe(false)
  })


})