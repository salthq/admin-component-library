import { shallowMount } from "@vue/test-utils";
import AdminButton from "@/components/AdminButton.vue";

describe("AdminButton.vue", () => {
  it("renders props.title when passed", () => {
    const title = "Save";
    const wrapper = shallowMount(AdminButton, {
      propsData: { title }
    });
    expect(wrapper.text()).toMatch(title);
  });
});
