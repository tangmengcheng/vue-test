export default {
    props: {
        render: {
            type: Function
        },
        item: {
            type: String,
            default: ''
        }
    },
    render(h) {
        return this.render(h, this.item);
    }
}