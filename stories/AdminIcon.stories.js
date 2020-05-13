import AdminIcon from '@/components/AdminIcon'

export default {
  title: 'Icon',
  component: AdminIcon,
  excludeStories: /.*Data$/
}

export const iconData = {
  icon: 'CopyIcon',
  size: 20,
  viewBox: '0 0 12 14'
}

export const Default = () => ({
  components: { AdminIcon },
  template: `
    <div class="text-gray-600"><admin-icon :viewBox="iconData.viewBox" :size="iconData.size" :icon="iconData.icon" class="mr-2 text-current fill-current stroke-current" /></div>
  `,
  props: {
    iconData: { default: () => iconData }
  }
})
