import { shallowMount } from "@vue/test-utils";
import AdminFormSectionTitle from "@/components/AdminFormSectionTitle.vue";

describe("AdminFormSectionTitle.vue", () => {
  it("renders props.title when passed", () => {
    const title = "Save";
    const wrapper = shallowMount(AdminFormSectionTitle, {
      propsData: { title }
    });
    expect(wrapper.text()).toMatch(title);
  });
});
