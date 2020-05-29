import AdminFormUpload from '@/components/AdminFormUpload'
import AdminFormWrapper from '@/components/AdminFormWrapper'

export default {
  title: 'Form/File Upload',
  component: AdminFormUpload
}

const defaultTemplate = `<admin-form-wrapper>
    <template v-slot:content>  
        <admin-form-upload inputID="first_name" label="First Name" :required="true" value=""  />
    </template>
</admin-form-wrapper>`

export const Default = () => ({
  components: { AdminFormUpload, AdminFormWrapper },
  template: defaultTemplate
})
