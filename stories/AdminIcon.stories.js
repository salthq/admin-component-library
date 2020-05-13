import AdminIcon from '@/components/AdminIcon'

export default {
  title: 'Icon',
  component: AdminIcon,
  excludeStories: /.*Data$/
}

export const iconData = {
  size: 20,
  viewBox: '0 0 12 14'
}

export const Copy = () => ({
  components: { AdminIcon },
  template: `
    <div class="text-gray-600"><admin-icon :viewBox="iconData.viewBox" :size="iconData.size" icon="CopyIcon" class="mr-2 text-current fill-current stroke-current" /></div>
  `,
  props: {
    iconData: { default: () => iconData }
  }
})

export const Delete = () => ({
  components: { AdminIcon },
  template: `
    <div class="text-gray-600"><admin-icon viewBox="0 0 20 20" :size="iconData.size" icon="DeleteIcon" class="mr-2 text-current fill-current stroke-current" /></div>
  `,
  props: {
    iconData: { default: () => iconData }
  }
})

export const Edit = () => ({
  components: { AdminIcon },
  template: `
    <div class="text-gray-600"><admin-icon viewBox="0 0 20 20" :size="iconData.size" icon="EditIcon" class="mr-2 text-current fill-current stroke-current" /></div>
  `,
  props: {
    iconData: { default: () => iconData }
  }
})

export const SortAscending = () => ({
  components: { AdminIcon },
  template: `
    <div class="text-gray-600"><admin-icon :viewBox="iconData.viewBox" :size="iconData.size" icon="SortAscIcon" class="mr-2 text-current fill-current stroke-current" /></div>
  `,
  props: {
    iconData: { default: () => iconData }
  }
})

export const SortDescending = () => ({
  components: { AdminIcon },
  template: `
    <div class="text-gray-600"><admin-icon :viewBox="iconData.viewBox" :size="iconData.size" icon="SortDescIcon" class="mr-2 text-current fill-current stroke-current" /></div>
  `,
  props: {
    iconData: { default: () => iconData }
  }
})