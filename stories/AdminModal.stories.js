import store from "@/store/index";

import AdminModal from "@/components/AdminModal"
import AdminModalToggle from "@/components/AdminModalToggle"


export default {
    title: "Modal",
    components: AdminModal
}

export const Default = () => ({
    components: {AdminModal, AdminModalToggle},
    template: `<div>
        <admin-modal-toggle :modalID="modalID">
            <button class="text-blue-600 py-2 cursor-pointer hover:opacity-75">Toggle Modal</button>
        </admin-modal-toggle>
        <admin-modal :id="modalID">Example Modal</admin-modal>
    </div>`,
    store,
    data() {
        return {
            modalID: "example-modal"
        }
    }
})