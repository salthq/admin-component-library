import { addDecorator } from '@storybook/vue'
import '@/style/tailwind.css'

const decoratorVueTemplate = () => {
  return { template: `<div class="p-3 max-w-6xl"><story/></div>` }
}
addDecorator(decoratorVueTemplate)
