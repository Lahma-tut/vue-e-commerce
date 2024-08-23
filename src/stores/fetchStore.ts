import { defineStore } from 'pinia'
import { useAxios } from '@vueuse/integrations/useAxios'

export const useFetchStore = defineStore('fetch-store', () => {
  const { 
    data, 
    isLoading, 
    isFinished, 
    error 
  } = useAxios('https://fakestoreapi.com/products')

  return {
    data,
    isLoading,
    isFinished,
    error
  }
})
