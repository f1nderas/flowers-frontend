import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/Button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/components/ui/DropdownMenu'

import { userService } from '@/services/user.service'

import { UserRole } from '@/shared/types/user.interface'

import { IUserColumn } from './UserColumns'

interface CurrentUser {
	id: string
	role: UserRole
}

interface RoleCellProps {
	row: {
		original: IUserColumn
	}
}

const RoleCell: React.FC<RoleCellProps> = ({ row }) => {
	const [role, setRole] = useState<UserRole>(row.original.role as UserRole)
	const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null)

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const profile = await userService.getProfile()
				setCurrentUser({
					id: profile.id,
					role: profile.role
				})
			} catch (error: any) {
				toast.error(`Ошибка получения профиля: ${error.message}`)
			}
		}

		fetchProfile()
	}, [])

	const handleChangeRole = async (newRole: UserRole) => {
		try {
			await userService.assignRole(row.original.id, newRole)
			setRole(newRole)
			toast.success(`Роль пользователя изменена на ${newRole}`)
		} catch (error: any) {
			toast.error(`Ошибка изменения роли: ${error.message}`)
		}
	}

	const canChangeRole = () => {
		if (!currentUser) return false
		if (currentUser.id === row.original.id) return false // Нельзя изменить свою собственную роль

		if (currentUser.role === UserRole.CREATOR) {
			return true // Создатель может менять роль любому пользователю
		}

		// Иерархия ролей для остальных пользователей
		const roleHierarchy: Record<UserRole, number> = {
			USER: 1,
			MANAGER: 2,
			ADMIN: 3,
			CREATOR: 4
		}

		return (
			roleHierarchy[currentUser.role] >
			roleHierarchy[row.original.role as UserRole]
		)
	}

	const availableRoles = () => {
		if (!currentUser) return []

		const roles = Object.values(UserRole)

		if (currentUser.role === UserRole.CREATOR) {
			return roles
		}

		const roleHierarchy: Record<UserRole, number> = {
			USER: 1,
			MANAGER: 2,
			ADMIN: 3,
			CREATOR: 4
		}

		return roles.filter(
			r => roleHierarchy[currentUser.role] > roleHierarchy[r]
		)
	}

	return (
		<div>
			{role}
			{canChangeRole() && (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost'>Изменить роль</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>
							Выберите новую роль
						</DropdownMenuLabel>
						{availableRoles().map(roleOption => (
							<DropdownMenuItem
								key={roleOption}
								onClick={() => handleChangeRole(roleOption)}
							>
								{roleOption}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</div>
	)
}

export default RoleCell
