import '@/style/tailwind.css'

import AdminFormInput from '@/components/AdminFormInput'
import AdminFormWrapper from '@/components/AdminFormWrapper'

const padding = () => {
  return {
    template: '<div style="padding: 1rem;"><story/></div>'
  }
}

export default {
  title: 'Form/Input',
  component: AdminFormInput,
  decorators: [padding]
}

const defaultTemplate = 
`<admin-form-wrapper>
    <template v-slot:form-content>  
        <admin-form-input inputID="first_name" label="First Name" :required="true" value=""  />
    </template>
</admin-form-wrapper>`

export const Default = () => ({
  components: { AdminFormInput, AdminFormWrapper },
  template: defaultTemplate
})
