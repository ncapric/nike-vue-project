import HeaderComponent from '@/components/HeaderComponent.vue';
import { socialMediaLinks } from '@/constants/social-media-links';

export default {
  title: 'Components/HeaderComponent',
  component: HeaderComponent
};

const Template = (args) => ({
  components: { HeaderComponent },
  setup () {
    return { args };
  },
  template: `
    <HeaderComponent>
      <div class="right-side">
        <div v-for="social in args.socialMediaLinks" :key="social.altText">
          <a :href="social.pageLink">
            <img :src="social.imgSrc" :alt="social.altText" />
          </a>
        </div>
        <h2>Welcome: {{ args.randomUserInitials }}</h2>
      </div>
    </HeaderComponent>
  `
});

export const Default = Template.bind({});
Default.args = {
  socialMediaLinks,
  randomUserInitials: 'AB'
};
