import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import { ICategory, ICategoryInput } from '@/shared/types/category.interface'

const isBuildTime = process.env.IS_DOCKER_BUILD === 'true'

class CategoryService {
	async getAll() {
		if (isBuildTime) {
			return [
				{
					id: 'string',
					createdAt: 'string',
					title: 'string',
					description: 'string',
					picture: 'string'
				}
			]
		}

		const { data } = await axiosClassic<ICategory[]>({
			url: API_URL.categories(`/`),
			method: 'GET'
		})

		return data
	}

	async getById(id: string) {
		if (isBuildTime) {
			return {
				id: 'string',
				createdAt: 'string',
				title: 'string',
				description: 'string',
				picture: 'string'
			}
		}

		const { data } = await axiosClassic<ICategory>({
			url: API_URL.categories(`/by-id/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: ICategoryInput) {
		if (isBuildTime) {
			return {
				id: 'string',
				createdAt: 'string',
				title: 'string',
				description: 'string',
				picture: 'string'
			}
		}
		const { data: createdCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/`),
			method: 'POST',
			data
		})

		return createdCategory
	}

	async update(id: string, data: ICategoryInput) {
		if (isBuildTime) {
			return {
				id: 'string',
				createdAt: 'string',
				title: 'string',
				description: 'string',
				picture: 'string'
			}
		}

		const { data: updatedCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: 'PUT',
			data
		})

		return updatedCategory
	}

	async delete(id: string) {
		if (isBuildTime) {
			return {
				id: 'string',
				createdAt: 'string',
				title: 'string',
				description: 'string',
				picture: 'string'
			}
		}

		const { data: deletedCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: 'DELETE'
		})

		return deletedCategory
	}
}

export const categoryService = new CategoryService()
