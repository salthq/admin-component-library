import '@/style/tailwind.css'

import AdminFormTextArea from '@/components/AdminFormTextArea'
import AdminFormWrapper from '@/components/AdminFormWrapper'

const padding = () => {
  return {
    template: '<div style="padding: 1rem;"><story/></div>'
  }
}

export default {
  title: 'Form/Text Area',
  component: AdminFormTextArea,
  decorators: [padding]
}

const defaultTemplate = 
`<admin-form-wrapper>
    <template v-slot:form-content>  
        <admin-form-text-area inputID="about" label="About" :required="true" value=""  />
    </template>
</admin-form-wrapper>`

export const Default = () => ({
  components: { AdminFormTextArea, AdminFormWrapper },
  template: defaultTemplate
})
