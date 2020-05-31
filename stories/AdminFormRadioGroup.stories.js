import AdminFormRadioGroup from '@/components/AdminFormRadioGroup'
import AdminFormWrapper from '@/components/AdminFormWrapper'

export default {
  title: 'Form/Radio Group',
  component: AdminFormRadioGroup
}

export const Default = () => ({
  components: { AdminFormRadioGroup, AdminFormWrapper },
  template: `<admin-form-wrapper>
        <template v-slot:content>
            <admin-form-radio-group
                title="Select an option" :inputs="inputs" />
        </template>
    </admin-form-wrapper>`,
  props: {
    inputs: { default: () => ['Option 1', 'Option 2'] }
  }
})

export const WithSubtitle = () => ({
  components: { AdminFormRadioGroup, AdminFormWrapper },
  template: `<admin-form-wrapper>
          <template v-slot:content>
              <admin-form-radio-group
                title="Push Notifications" 
                subtitle="These are delivered via SMS to your mobile phone."
                :inputs="inputs" />
          </template>
      </admin-form-wrapper>`,
  props: {
    inputs: {
      default: () => ['Everything', 'Same as email', 'No push notifications']
    }
  }
})
