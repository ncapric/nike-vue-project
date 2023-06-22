import InputComponent from '@/components/inputs/InputComponent.vue';

export default {
  title: 'Components/InputComponent',
  component: InputComponent
};

const Template = (args) => ({
  components: { InputComponent },
  setup () {
    return { args };
  },
  template: '<InputComponent v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  text: 'Input',
  id: 'input-id',
  type: 'text',
  modelValue: ''
};
