import FormComponent from '@/components/FormComponent.vue';
import InputComponent from '@/components/inputs/InputComponent.vue';
import CheckboxComponent from '@/components/inputs/CheckboxComponent.vue';

export default {
  title: 'Components/FormComponent',
  component: FormComponent
};

const Template = (args) => ({
  components: { FormComponent, InputComponent, CheckboxComponent },
  setup () {
    return { args };
  },
  template: `
    <FormComponent>
      <InputComponent
        v-model="args.username"
        text="First name"
        id="first-name"
        type="text"
      />
      <InputComponent
        v-model="args.lastname"
        text="Last Name"
        for="last-name"
        id="last-name"
        type="text"
      />
      <InputComponent
        v-model="args.age"
        text="How old are you?"
        for="age"
        id="age"
        type="number"
      />
      <CheckboxComponent
        v-model="args.underAgedCheck"
        v-if="args.isUnderAged"
        text="I have my parent's consent."
      />
      <CheckboxComponent
        v-model="args.isChecked"
        text="I agree with the terms and services"
      />
      <input type="submit" value="Submit" :disabled="!args.formIsValid" />
    </FormComponent>
  `
});

export const Default = Template.bind({});
Default.args = {
  username: '',
  lastname: '',
  age: 0,
  isChecked: false,
  underAgedCheck: false,
  isUnderAged: false,
  formIsValid: false
};
