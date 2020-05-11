// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import '@/style/tailwind.css'

import AdminFormWrapper from '@/components/AdminFormWrapper'

import AdminButton from '@/components/AdminButton'
import AdminFormInput from '@/components/AdminFormInput'
import AdminFormSectionTitle from "@/components/AdminFormSectionTitle"
import AdminFormTextArea from "@/components/AdminFormTextArea"

const padding = () => {
  return {
    template: '<div style="padding: 1rem;"><story/></div>'
  }
}

export default {
  title: 'Form/Form Wrapper',
  component: AdminFormWrapper,
  decorators: [padding]
}

const defaultFormWrapper = `<admin-form-wrapper />`

const withContentFormWrapper = `
<admin-form-wrapper>
    <template v-slot:form-content>
      <admin-form-section-title title="Personal Information" />
      <admin-form-input inputID="first_name" label="First Name" :required="true" value="" />
      <admin-form-input inputID="last_name" label="Last name" value="" />
      <admin-form-input inputID="Email Address" label="Email Address" :required="true" value="" type="email" />
      <admin-form-text-area inputID="about" label="About" :required="true" value=""  />
    </template>
    <template v-slot:form-actions>
        <admin-button title="Save" />
    </template>
</admin-form-wrapper>
`

export const Default = () => ({
  components: { AdminFormWrapper },
  template: defaultFormWrapper
})

export const WithContent = () => ({
  components: { AdminFormWrapper, AdminButton, AdminFormInput, AdminFormSectionTitle, AdminFormTextArea },
  template: withContentFormWrapper
})
