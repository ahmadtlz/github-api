import React from 'react'
import {Box, Spinner} from '@chakra-ui/react'

export default function Loading() {
  return (
    <Box
      py={6}
      h={'sm'}
      width={'full'}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  )
}
