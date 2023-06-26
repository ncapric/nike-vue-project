import { useStore } from 'vuex';

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import HeaderComponent from '@/components/HeaderComponent.vue';



describe('Header Tests', async () => {

    const store = useStore();

    it("renders the header", () => {
        const wrapper = mount(HeaderComponent, {
            global: {
                plugins: [store]
            }
        })
 
        const div = wrapper.find('div.header');
        expect(div.exists()).toBe(true);
    })

    it('displays the correct social media links', () => {
        const wrapper = mount(HeaderComponent);
        const socialLinks = wrapper.findAll('.right-side a');

        expect(socialLinks).toHaveLength(3);

        expect(socialLinks[0].attributes('href')).toBe('https://www.facebook.com/');
        expect(socialLinks[0].find('img').attributes('alt')).toBe('Facebook');
        expect(socialLinks[0].find('img').attributes('src')).toBe('/assets/icons/Facebook.png');
    });

    it('displays the user initials', () => {
        const wrapper = mount(HeaderComponent, {
            global: {
                plugins: [store]
            }
        })

        expect(wrapper.html()).toMatchSnapshot();
    })

})