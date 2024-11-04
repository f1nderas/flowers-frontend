import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { IProduct, IProductInput } from '@/shared/types/product.interface'

const isBuildTime = process.env.APP_ENV === 'build'

class ProductService {
	async getAllForUser(searchTerm?: string | null) {
		if (isBuildTime) {
			return [
				{
					id: '1',
					title: 'Фиктивный продукт 1',
					description: 'Это фиктивный продукт.',
					images: [''],
					price: 0,
					category: {
						id: 'string',
						createdAt: 'string',
						title: 'string',
						description: 'string',
						picture: 'string'
					},
					reviews: [],
					isVisible: true
				}
			]
		}
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.productsUser(),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})

		return data || []
	}

	async getAll(searchTerm?: string | null) {
		if (isBuildTime) {
			return [
				{
					id: '1',
					title: 'Фиктивный продукт 1',
					description: 'Это фиктивный продукт.',
					images: [''],
					price: 0,
					category: {
						id: 'string',
						createdAt: 'string',
						title: 'string',
						description: 'string',
						picture: 'string'
					},
					reviews: [],
					isVisible: true
				}
			]
		}
		const { data } = await axiosWithAuth<IProduct[]>({
			url: API_URL.productsAdmin(),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})

		return data || []
	}

	async getById(id: string) {
		if (isBuildTime) {
			return {
				id: '1',
				title: 'Фиктивный продукт 1',
				description: 'Это фиктивный продукт.',
				images: [''],
				price: 0,
				category: {
					id: 'string',
					createdAt: 'string',
					title: 'string',
					description: 'string',
					picture: 'string'
				},
				reviews: [],
				isVisible: true
			}
		}
		const { data } = await axiosClassic<IProduct>({
			url: API_URL.products(`/by-id/${id}`),
			method: 'GET'
		})

		return data
	}

	async getByCategory(categoryId: string) {
		if (isBuildTime) {
			return [
				{
					id: '1',
					title: 'Фиктивный продукт 1',
					description: 'Это фиктивный продукт.',
					images: [''],
					price: 0,
					category: {
						id: 'string',
						createdAt: 'string',
						title: 'string',
						description: 'string',
						picture: 'string'
					},
					reviews: [],
					isVisible: true
				}
			]
		}
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/by-category/${categoryId}`),
			method: 'GET'
		})

		return data
	}

	async getMostPopular() {
		if (isBuildTime) {
			return [
				{
					id: '1',
					title: 'Фиктивный продукт 1',
					description: 'Это фиктивный продукт.',
					images: [''],
					price: 0,
					category: {
						id: 'string',
						createdAt: 'string',
						title: 'string',
						description: 'string',
						picture: 'string'
					},
					reviews: [],
					isVisible: true
				}
			]
		}
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/most-popular`),
			method: 'GET'
		})

		return data
	}

	async getSimilar(id: string) {
		if (isBuildTime) {
			return [
				{
					id: '1',
					title: 'Фиктивный продукт 1',
					description: 'Это фиктивный продукт.',
					images: [''],
					price: 0,
					category: {
						id: 'string',
						createdAt: 'string',
						title: 'string',
						description: 'string',
						picture: 'string'
					},
					reviews: [],
					isVisible: true
				}
			]
		}
		const { data } = await axiosClassic<IProduct[]>({
			url: API_URL.products(`/similar/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: IProductInput) {
		if (isBuildTime) {
			return [
				{
					id: '1',
					title: 'Фиктивный продукт 1',
					description: 'Это фиктивный продукт.',
					images: [''],
					price: 0,
					category: {
						id: 'string',
						createdAt: 'string',
						title: 'string',
						description: 'string',
						picture: 'string'
					},
					reviews: [],
					isVisible: true
				}
			]
		}
		const { data: createdProduct } = await axiosWithAuth<IProduct[]>({
			url: API_URL.products(),
			method: 'POST',
			data
		})

		return createdProduct
	}

	async update(id: string, data: IProductInput) {
		if (isBuildTime) {
			return {
				id: '1',
				title: 'Фиктивный продукт 1',
				description: 'Это фиктивный продукт.',
				images: [''],
				price: 0,
				category: {
					id: 'string',
					createdAt: 'string',
					title: 'string',
					description: 'string',
					picture: 'string'
				},
				reviews: [],
				isVisible: true
			}
		}
		const { data: updatedProduct } = await axiosWithAuth<IProduct>({
			url: API_URL.products(`/${id}`),
			method: 'PUT',
			data
		})

		return updatedProduct
	}

	async delete(id: string) {
		if (isBuildTime) {
			return {
				id: '1',
				title: 'Фиктивный продукт 1',
				description: 'Это фиктивный продукт.',
				images: [''],
				price: 0,
				category: {
					id: 'string',
					createdAt: 'string',
					title: 'string',
					description: 'string',
					picture: 'string'
				},
				reviews: [],
				isVisible: true
			}
		}
		const { data: deletedProduct } = await axiosWithAuth<IProduct>({
			url: API_URL.products(`/${id}`),
			method: 'DELETE'
		})

		return deletedProduct
	}

	async toggleVisibility(id: string, isVisible: boolean) {
		if (isBuildTime) {
			return {
				id: '1',
				title: 'Фиктивный продукт 1',
				description: 'Это фиктивный продукт.',
				images: [''],
				price: 0,
				category: {
					id: 'string',
					createdAt: 'string',
					title: 'string',
					description: 'string',
					picture: 'string'
				},
				reviews: [],
				isVisible: true
			}
		}
		const { data: updatedProduct } = await axiosWithAuth<IProduct>({
			url: API_URL.products(`/${id}/visibility`),
			method: 'PATCH',
			data: { isVisible }
		})

		return updatedProduct
	}
}

export const productService = new ProductService()
