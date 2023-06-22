import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
  title: 'Components/SidebarComponent',
  component: SidebarComponent
};

const Template = () => ({
  components: { SidebarComponent },
  setup () {
    const goToUsers = () => {
      return null;
    };

    return { goToUsers };
  },
  template: `
    <SidebarComponent>
      <img src="../assets/icons/jordan-logo.png" alt="Logo" class="logo" />
      <button @click="goToUsers">All users</button>
      <div class="logout">
        <p>Logout</p>
        <a href="">
          <img src="../assets/icons/Logout-button.svg" alt="" />
        </a>
      </div>
    </SidebarComponent>
  `
});

export const Default = Template.bind({});
