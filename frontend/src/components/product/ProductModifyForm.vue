<template lang="">
    <div>
       <form @submit.prevent="onSubmit">
           <table>
             <tr>
                    <td>상품 이미지</td>
                    <td>
                        <v-row align="center">
                            <v-col v-for="(imagePath, idx) in productImagesPathList" :key="idx" cols="10">
                                <!-- <v-img
                                    :src="require(`D:/Github/kdt1-study-3-team4-back/demo/src/main/java/com/example/demo/UploadImgs/${imagePath}`)" -->
                                <v-img
                                    :src="require(`@/../../../kdt1-study-3-team4-back/demo/src/main/java/com/example/demo/UploadImgs/${imagePath}`)"
                                    aspect-ratio="1" class="grey lighten-2">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey lighten-5" />
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-col>
                        </v-row>
                    </td>
                </tr>
                <tr>
                    <td>상품명</td>
                    <td>
                        <input type="text" :value="product.productName" readonly />
                    </td>
                </tr>
                <tr>
                    <td>가격</td>
                    <td>
                        <input type="number" :value="product.productPrice" readonly />
                    </td>
                </tr>
                <tr>
                    <td>제조사</td>
                    <td>
                        <input type="text" :value="product.vendor" readonly />
                    </td>
                </tr>
                <tr>
                    <td>세부 사항</td>
                    <td>
                        <textarea cols="50" rows="20" :value="product.productDetails" readonly />
                    </td>
                </tr>
            </table>
            <div>
                <button type="submit">수정 완료</button>
                <router-link :to="{
                    name:'ProductReadPage',
                    params: {productId: product.productId.toString()}
                }">수정 취소</router-link>
            </div>
        </form>
   </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
    
        }
    },
    data() {
        return {
            ImagesPathList: '',
            name: '',
            price: '',
            vendor: '',
            details: '',
           
        }
    },
    created() {
        this.ImagesPathList = this.product.ImagesPathList 
        this.name = this.product.name
        this.price = this.product.price
        this.vendor = this.product.vendor
        this.details = this.product.details
        

    },
    methods: {
        onSubmit() {
            const { ImagesPathList, name, price, vendor, details } = this
            this.$emit('submit', { ImagesPathList, name, price, vendor, details })
        
        }
    },
}
</script>
<style lang="">
   
</style>