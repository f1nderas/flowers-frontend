import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { orderService } from '@/services/order.service'

import { IOrder } from '@/shared/types/order.interface'

export const useGetOrder = (orderId: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ['get order', orderId],
		queryFn: () => orderService.getById(orderId)
	})

	const order: IOrder | undefined = data?.data

	return useMemo(
		() => ({
			order,
			isLoading
		}),
		[order, isLoading]
	)
}
