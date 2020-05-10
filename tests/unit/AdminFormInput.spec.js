import { shallowMount } from "@vue/test-utils";
import AdminFormInput from "@/components/AdminFormInput.vue";

let wrapper;

const label = "First Name";
const inputID = "first_name";
const value = "first_name"


beforeEach(() => {
    wrapper = shallowMount(AdminFormInput, {
        propsData: { label, inputID, value }
    })
})

afterEach(() => wrapper.destroy);

describe("AdminFormInput.vue", () => {
  it("renders props.label when passed", () => {
    expect(wrapper.text()).toMatch(label);
  });

});
