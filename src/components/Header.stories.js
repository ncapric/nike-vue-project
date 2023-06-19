// YourComponent.stories.ts
import Header from './Header.vue';

const meta = {
  component: Header,
};

//👇 This default export determines where your story goes in the story list
export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: '<Header v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component

  },
};