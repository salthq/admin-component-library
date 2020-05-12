import store from "@/store/index";

import AdminModal from "@/components/AdminModal"
import AdminModalToggle from "@/components/AdminModalToggle"
import AdminButton from "@/components/AdminButton"


export default {
    title: "Modal",
    components: AdminModal
}

export const Default = () => ({
    components: {AdminModal, AdminModalToggle, AdminButton},
    template: `<div>
        <admin-modal-toggle :modalID="modalID">
           <admin-button title="Toggle Modal" />
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

export const Multiple = () => ({
    components: {AdminModal, AdminModalToggle, AdminButton},
    template: `<div>
        <admin-modal-toggle :modalID="modalID1" class="mb-3">
           <admin-button title="Toggle Modal" />
        </admin-modal-toggle>

        <admin-modal-toggle :modalID="modalID2" class="mb-3">
           <admin-button title="Toggle Modal" type="secondary" />
        </admin-modal-toggle>

        <admin-modal-toggle :modalID="modalID3">
           <admin-button title="Toggle Modal" type="white" />
        </admin-modal-toggle>
        <admin-modal :id="modalID1">Example Modal 1</admin-modal>
        <admin-modal :id="modalID2">Example Modal 2</admin-modal>
        <admin-modal :id="modalID3">Example Modal 3</admin-modal>
    </div>`,
    store,
    data() {
        return {
            modalID1: "example-modal1",
            modalID2: "example-modal2",
            modalID3: "example-modal3"
        }
    }
})