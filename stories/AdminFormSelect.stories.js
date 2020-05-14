import AdminFormSelect from '@/components/AdminFormSelect'
import AdminFormWrapper from '@/components/AdminFormWrapper'

export default {
  title: 'Form/Select',
  component: AdminFormSelect
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

const defaultTemplate = `<admin-form-wrapper>
    <template v-slot:content>  
        <admin-form-select inputID="province" label="Province" :options="options" :required="true"  />
    </template>
</admin-form-wrapper>`

export const Default = () => ({
  components: { AdminFormSelect, AdminFormWrapper },
  template: defaultTemplate,
  props: {
    options: { default: () => options }
  }
})
