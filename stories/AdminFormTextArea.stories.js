import AdminFormTextArea from '@/components/AdminFormTextArea'
import AdminFormWrapper from '@/components/AdminFormWrapper'

export default {
  title: 'Form/Text Area',
  component: AdminFormTextArea
}

const defaultTemplate = `<admin-form-wrapper>
    <template v-slot:form-content>  
        <admin-form-text-area inputID="about" label="About" :required="true" value=""  />
    </template>
</admin-form-wrapper>`

export const Default = () => ({
  components: { AdminFormTextArea, AdminFormWrapper },
  template: defaultTemplate
})
