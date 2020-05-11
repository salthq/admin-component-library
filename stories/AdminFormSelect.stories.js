import '@/style/tailwind.css'

import AdminFormSelect from '@/components/AdminFormSelect'
import AdminFormWrapper from '@/components/AdminFormWrapper'

const padding = () => {
  return {
    template: '<div style="padding: 1rem;"><story/></div>'
  }
}

export default {
  title: 'Form/Select',
  component: AdminFormSelect,
  decorators: [padding]
}

const options = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanaga',
    'North West Province',
    'Northern Cape',
    'Western Cape'
]

const defaultTemplate = 
`<admin-form-wrapper>
    <template v-slot:form-content>  
        <admin-form-select inputID="province" label="Province" :options="options" :required="true"  />
    </template>
</admin-form-wrapper>`

export const Default = () => ({
  components: { AdminFormSelect, AdminFormWrapper },
  template: defaultTemplate,
  props: {
    options: { default: () => options },
  },
})
