import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import ChakraNextLinkButton from './ChakraNextLinkButton'
export default function UserCard(props) {
  return (
    <Center mt={10} py={6} w={'full'}>
      <Box
        maxW={'370px'}
        w={'full'}
        bg={props.error ? '#f2756a' : props.idle ? '#a5a5e7' : '#5556fc'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Flex justify={'center'} mt={12}>
          <Avatar
            size={'xl'}
            src={props.error ? props.img : props.img}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading
              fontSize={'2xl'}
              fontWeight={500}
              fontFamily={'body'}
              color="white"
            >
              {Boolean(props.error) ? 'Error !' : props.name}
            </Heading>
            {Boolean(props.error) && (
              <Text color={'white'}>{props.message}</Text>
            )}
          </Stack>

          {!Boolean(props.error) && (
            <>
              <Stack direction={'row'} justify={'center'} spacing={4}>
                <Stack spacing={0} align={'center'}>
                  <Text color="white" fontWeight={600}>
                    {props.following}
                  </Text>
                  <Text fontSize={'sm'} color={'white'}>
                    Following
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text color={'white'} fontWeight={600}>
                    {props.followers}
                  </Text>
                  <Text fontSize={'sm'} color={'white'}>
                    Followers
                  </Text>
                </Stack>
              </Stack>
              {!Boolean(props.idle) && (
                <ChakraNextLinkButton
                  href={`/profile/${props.name}`}
                  as="a"
                  w={'full'}
                  mt={8}
                  bg={'white'}
                  color={'#151f21'}
                  rounded={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  More
                </ChakraNextLinkButton>
              )}
            </>
          )}
        </Box>
      </Box>
    </Center>
  )
}
