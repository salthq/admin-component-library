import { mount } from '@vue/test-utils'

import AdminIcon from '@/components/AdminIcon.vue'

let wrapper

const size = 20
const viewBox = '0 0 12 14'
const icon = 'CopyIcon'

beforeEach(() => {
  wrapper = mount(AdminIcon, {
    propsData: { size, viewBox, icon }
  })
})

afterEach(() => wrapper.destroy)

describe('AdminIcon.vue', () => {
    it('renders an svg with a class equal to props.icon', () => {
        const svgClass = wrapper.find(`.${icon}`);

        expect(svgClass.exists()).toBe(true)
    })

    it('renders an svg with a width equal to props.size', () => {
        const svg = wrapper.find('svg');

        expect(svg.attributes('width')).toEqual(`${size}`)
    })

    it('renders an svg with a height equal to props.size', () => {
        const svg = wrapper.find('svg');

        expect(svg.attributes('height')).toEqual(`${size}`)
    })

    it('renders an svg with a viewBox equal to props.viewBox', () => {
        const svg = wrapper.find('svg');

        expect(svg.attributes('viewBox')).toEqual(`${viewBox}`)
    })
})

