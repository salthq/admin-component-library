import AdminIcon from '@/components/AdminIcon'
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

export const WithIcon = () => ({
  components: { AdminIcon, AdminButton },
  template: `
  <admin-button title="Copy">
      <template v-slot:icon>
          <span class="text-white"><admin-icon viewBox="0 0 12 14" size="20" icon="CopyIcon" class="mr-2 text-current fill-current stroke-current" /></span>
      </template>
  </admin-button>
`
})
