import CheckboxComponent from '@/components/inputs/CheckboxComponent.vue';

export default {
  title: 'Components/CheckboxComponent',
  component: CheckboxComponent
};

const Template = (args) => ({
  components: { CheckboxComponent },
  setup () {
    return { args };
  },
  template: '<CheckboxComponent v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  text: 'Checkbox',
  modelValue: false
};
