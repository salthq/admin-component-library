import AdminFormCheckboxGroup from '@/components/AdminFormCheckboxGroup'
import AdminFormWrapper from '@/components/AdminFormWrapper'

export default {
  title: 'Form/Checkbox',
  component: AdminFormCheckboxGroup
}

export const Single = () => ({
  components: { AdminFormCheckboxGroup, AdminFormWrapper },
  template: `<admin-form-wrapper>
          <template v-slot:content>
              <admin-form-checkbox-group title="Notifications" :inputs="inputs" />
          </template>
      </admin-form-wrapper>`,
  props: {
    inputs: {
      default: () => [
        {
          title: 'Turn comment notifications on',
        }
      ]
    }
  }
})

export const Multiple = () => ({
  components: { AdminFormCheckboxGroup, AdminFormWrapper },
  template: `<admin-form-wrapper>
        <template v-slot:content>
            <admin-form-checkbox-group title="Email Notifications" :inputs="inputs" />
        </template>
    </admin-form-wrapper>`,
  props: {
    inputs: {
      default: () => [
        {
          title: 'Comments',
          subtitle: 'Get notified when someones posts a comment on a posting'
        },
        {
          title: 'Candidates',
          subtitle: 'Get notified when a candidate applies for a job.'
        },
        {
          title: 'Offers',
          subtitle: 'Get notified when a candidate accepts or rejects an offer.'
        }
      ]
    }
  }
})
