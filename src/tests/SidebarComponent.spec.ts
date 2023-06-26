import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import SidebarComponent from '@/components/SidebarComponent.vue';

describe('Sidebar tests', () => {

    it('renders the sidebar with the correct elements', () => {
        const wrapper = mount(SidebarComponent);

        const logo = wrapper.find('.logo');
        expect(logo.exists()).toBe(true);

        const allUsersButton = wrapper.find('button');
        expect(allUsersButton.exists()).toBe(true);
        expect(allUsersButton.text()).toBe('All users');

        const logoutSection = wrapper.find('.logout');
        expect(logoutSection.exists()).toBe(true);

        const logoutText = logoutSection.find('p');
        expect(logoutText.exists()).toBe(true);
        expect(logoutText.text()).toBe('Logout');

        const logoutLink = logoutSection.find('a');
        expect(logoutLink.exists()).toBe(true);

        const logoutIcon = logoutLink.find('img');
        expect(logoutIcon.exists()).toBe(true);
    })
})