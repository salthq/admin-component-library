import AdminFormInput from '@/components/AdminFormInput'
import AdminFormWrapper from '@/components/AdminFormWrapper'

export default {
  title: 'Form/Input',
  component: AdminFormInput
}

const defaultTemplate = `<admin-form-wrapper>
    <template v-slot:content>  
        <admin-form-input inputID="first_name" label="First Name" :required="true" value=""  />
    </template>
</admin-form-wrapper>`

export const Default = () => ({
  components: { AdminFormInput, AdminFormWrapper },
  template: defaultTemplate
})
