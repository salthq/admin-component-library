import AdminFormWrapper from '@/components/AdminFormWrapper'

import AdminButton from '@/components/AdminButton'
import AdminFormInput from '@/components/AdminFormInput'
import AdminFormSectionTitle from '@/components/AdminFormSectionTitle'
import AdminFormTextArea from '@/components/AdminFormTextArea'
import AdminFormSelect from '@/components/AdminFormSelect'
export default {
  title: 'Form/Form Wrapper',
  component: AdminFormWrapper
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

const defaultFormWrapper = `<admin-form-wrapper />`

const withContentFormWrapper = `
<admin-form-wrapper>
    <template v-slot:form-content>
      <admin-form-section-title title="Personal Information" />
      <admin-form-input inputID="first_name" label="First Name" :required="true" value="" />
      <admin-form-input inputID="last_name" label="Last name" value="" />
      <admin-form-input inputID="Email Address" label="Email Address" :required="true" value="" type="email" />
      <admin-form-text-area inputID="about" label="About" :required="true" value=""  />
      <admin-form-select inputID="province" label="Province" :options="options" :required="true"  />

    </template>
</admin-form-wrapper>
`

const withActionsFormWrapper = `
<admin-form-wrapper>
   <template v-slot:form-actions>
    <admin-button title="Cancel" type="white" />
    <admin-button title="Delete" type="danger" />
   </template>
</admin-form-wrapper>
`
export const Default = () => ({
  components: { AdminFormWrapper },
  template: defaultFormWrapper
})

export const WithContent = () => ({
  components: {
    AdminFormWrapper,
    AdminFormInput,
    AdminFormSelect,
    AdminFormSectionTitle,
    AdminFormTextArea
  },
  template: withContentFormWrapper,
  props: {
    options: { default: () => options }
  }
})

export const WithActions = () => ({
  components: { AdminFormWrapper, AdminButton },
  template: withActionsFormWrapper
})
