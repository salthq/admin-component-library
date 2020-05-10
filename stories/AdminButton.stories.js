// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import '@/style/tailwind.css'

import AdminButton from '@/components/AdminButton'

const padding = () => {
  return {
    template: '<div style="padding: 1rem;"><story/></div>'
  }
}

export default {
  title: 'Button',
  component: AdminButton,
  decorators: [padding]
}

export const Primary = () => ({
  components: { AdminButton },
  template: `<admin-button title="Save" type="primary" />`
})

export const Secondary = () => ({
  components: { AdminButton },
  template: `<admin-button title="Refresh" type="secondary" />`
})

export const Danger = () => ({
  components: { AdminButton },
  template: `<admin-button title="Delete" type="danger" />`
})

export const White = () => ({
  components: { AdminButton },
  template: `<admin-button title="Cancel" type="white" />`
})
