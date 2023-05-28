import {
  REQUEST_PRODUCT_TO_SPRING,
  REQUEST_PRODUCT_LIST_TO_SPRING,
} from "./mutation-types";

import axiosInst from '@/utility/axiosInst'

export default {
  requestProductListToSpring({ commit }) {
    return axiosInst.get("/product/list").then((res) => {
      commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
    });
  },
  requestRegisterProductToSpring({ }, payload) {
    return axiosInst.post('/product/register', payload)
      .then((res) => {
        if (res.data) {
          alert('게시물 등록 성공!')
          return res.data
        } else {
          alert('문제 발생')
        }
      })
      .catch(() => {
        alert('문제 발생!')
      })
  },
  requestProductToSpring({ commit }, productId) {
    return axiosInst.get(`/product/read/${productId}`)
      .then((res) => {
        commit(REQUEST_PRODUCT_TO_SPRING, res.data)
      })
  },
  requestOrderToSpring({ }, payload) {
    console.log(payload)
    const { productId, accountToken } = payload
    return axiosInst.post('/orders/register', { productId, accountToken })
      .then((res) => {
        if (res.data) {
          alert('구매 성공!')
        } else {
          alert('구매 실패')
        }
      })
  },
  requestProductModifyToSpring({ }, payload) {
    const { ImagesPathList, name, price, vendor, details} = payload

    console.log("")
    
    return axiosInst.put(`/product/${productId}`, { ImagesPathList, name, price, vendor, details })
      .then((res) => {
        alert("수정 성공!")
      })
      .catch(() => {
        alert('문제 발생!')
      })
  },
}