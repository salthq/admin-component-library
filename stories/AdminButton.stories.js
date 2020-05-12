import AdminButton from '@/components/AdminButton'

export default {
  title: 'Button',
  component: AdminButton
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
