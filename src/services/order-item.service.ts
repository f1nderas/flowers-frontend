import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { ICartItem } from '@/shared/types/cart.interface'

class OrderItemService {
	async getOrderItemById(id: string) {
		return axiosWithAuth<ICartItem>({
			url: API_URL.ordersItem(`/${id}`),
			method: 'GET'
		})
	}

	async getAllOrderItems() {
		return axiosWithAuth<ICartItem[]>({
			url: API_URL.ordersItem(),
			method: 'GET'
		})
	}
}

export const orderItemService = new OrderItemService()
