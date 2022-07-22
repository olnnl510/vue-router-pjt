<template>
    <tr>
        <td>{{ item.product_name }}</td>
        <td>{{ getPrice }}</td>
        <td>{{ item.category }}</td>
        <td>{{ getDeliveryPrice }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        item: Object
    },
    computed: {
        getPrice() {
            return this.numberComma(this.item.price);
        },
        getDeliveryPrice() {
            return this.numberComma(this.item.delivery_price);
        }
    },
    methods: {
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 정규식 이용한 방법
        }
    }
}
</script>

<style>

</style>