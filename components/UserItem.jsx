import React from 'react'
import {Stack, Text} from '@chakra-ui/react'

export default function UserItem({itemName, label}) {
  return (
    <Stack spacing={0} align={'center'}>
      <Text color="white" fontSize={'sm'}>
        {label}
      </Text>
      <Text fontWeight={600} color={'white'} textAlign={'center'}>
        {Boolean(itemName) ? itemName : '-'}
      </Text>
    </Stack>
  )
}
