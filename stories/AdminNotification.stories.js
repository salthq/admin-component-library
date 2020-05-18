import AdminNotification from "@/components/AdminNotification";

export default {
    title: 'Notification',
    component: AdminNotification
}

export const SimpleSuccess = () => ({
    components: {AdminNotification},
    template: `<admin-notification :visible="true" />`
})