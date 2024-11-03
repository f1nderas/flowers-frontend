import Image from 'next/image'

import { Card } from '@/components/ui/Card'

import { ICartItem } from '@/shared/types/cart.interface'

import { formatPrice } from '@/utils/string/format-price'

export const OrderProductCard = ({ item }: { item: ICartItem }) => {
	return (
		<Card className='flex items-center space-x-4 p-4'>
			<Image
				src={item.product.images[0]}
				alt={item.product.title}
				width={100}
				height={100}
				className='rounded-md'
			/>
			<div className='flex-grow'>
				<h3 className='text-lg font-medium'>{item.product.title}</h3>
				<p className='text-muted-foreground'>
					{formatPrice(item.product.price)} x {item.quantity}
				</p>
			</div>
		</Card>
	)
}
