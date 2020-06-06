import AdminFormDatePicker from '@/components/AdminFormDatePicker'
import AdminFormWrapper from '@/components/AdminFormWrapper'

export default {
  title: 'Form/Date Picker',
  component: AdminFormDatePicker
}

const defaultTemplate = `<admin-form-wrapper>
    <template v-slot:content>  
        <admin-form-date-picker inputID="date_picker" label="Start Date" :required="true"  />
    </template>
</admin-form-wrapper>`

export const Default = () => ({
  components: { AdminFormDatePicker, AdminFormWrapper },
  template: defaultTemplate
})
