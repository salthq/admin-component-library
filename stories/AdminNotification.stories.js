import AdminNotification from "@/components/AdminNotification";

export default {
    title: 'Notification',
    component: AdminNotification
}

export const SimpleSuccess = () => ({
    components: {AdminNotification},
    template: `<admin-notification message="The lesson was created" status="success" :visible="true" />`
})

export const SimpleFailure = () => ({
    components: {AdminNotification},
    template: `<admin-notification message="Your request was not completed" status="failure" :visible="true" />`
})