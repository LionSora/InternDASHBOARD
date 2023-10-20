'use client'
import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from '@nextui-org/react'
import MainLayout from '~/layouts/MainLayout'

import { AiFillEdit, AiFillEye, AiFillDelete } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'

const users = [
  {
    id: 1,
    name: '24 Hours Open',
    role: 'CEO',
    team: 'Management',
    status: 'active',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Technical Lead',
    team: 'Development',
    status: 'paused',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Senior Developer',
    team: 'Development',
    status: 'active',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'William Howard',
    role: 'Community Manager',
    team: 'Marketing',
    status: 'vacation',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    role: 'Sales Manager',
    team: 'Sales',
    status: 'active',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
]
const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'ROLE', uid: 'role' },
  { name: 'STATUS', uid: 'status' },
  { name: 'ACTIONS', uid: 'actions' },
]
const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
}

export default function Tables() {
  // const userData = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () =>
  //     fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
  //       response.json()
  //     ),
  // })

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'title':
        return (
          <User
            avatarProps={{
              radius: 'lg',
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            }}
            description={user.title}
            name={cellValue}
          >
            {user.title}
          </User>
        )
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            <p className='text-bold text-sm capitalize text-default-400'>
              {user.title}
            </p>
          </div>
        )
      case 'status':
        return (
          <Chip
            className='capitalize'
            color={statusColorMap[user.status]}
            size='sm'
            variant='flat'
          >
            {cellValue}
          </Chip>
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Details'>
              <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
                <AiFillEye />
              </span>
            </Tooltip>
            <Tooltip content='Edit user'>
              <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
                <AiFillEdit />
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Delete user'>
              <span className='cursor-pointer text-lg text-danger active:opacity-50'>
                <AiFillDelete />
              </span>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  // if (userData.isLoading) return <div>Loading</div>

  return (
    <MainLayout>
      <Table aria-label='Example table with custom cells'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users || []}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </MainLayout>
  )
}
