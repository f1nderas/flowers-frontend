import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { orderItemService } from '@/services/order-item.service'

export const useGetOrderItem = (orderId: string) => {
	const { data: order, isLoading } = useQuery({
		queryKey: ['get order item'],
		queryFn: () => orderItemService.getOrderItemById(orderId)
	})

	return useMemo(
		() => ({
			order,
			isLoading
		}),
		[order, isLoading]
	)
}
