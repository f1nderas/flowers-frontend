'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
	ArrowUpDown,
	ExternalLink,
	MoreHorizontal,
	Pencil,
	Trash
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/Select'

import { PUBLIC_URL, STORE_URL } from '@/config/url.config'

import { userService } from '@/services/user.service'

import { UserRole } from '@/shared/types/user.interface'

import RoleCell from './RolleCell'

export interface IUserColumn {
	id: string
	picture: string
	name: string
	email: string
	role: string
}

export const userColumns: ColumnDef<IUserColumn>[] = [
	{
		accessorKey: 'picture',
		header: 'Фотография',
		cell: ({ row }) => (
			<div className='flex items-center  '>
				{row.original.picture ? (
					<Image
						src={row.original.picture}
						alt={row.original.name}
						width={50}
						height={50}
						className='rounded-md'
					/>
				) : (
					<span>Нет изображения</span>
				)}
			</div>
		)
	},
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Имя
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		)
	},
	{
		accessorKey: 'email',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
			>
				Email
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		)
	},
	{
		accessorKey: 'role',
		header: 'Роль',
		cell: ({ row }) => <RoleCell row={row} />
	}
]
