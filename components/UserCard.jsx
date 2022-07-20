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
import UserItem from './UserItem'
export default function UserCard({
  profile = false,
  width = '370px',
  py = 10,
  mt = 6,
  ...props
}) {
  return (
    <Center
      mt={profile ? '' : 10}
      py={profile ? '' : 6}
      w={props.error ? 'full' : ['full', width]}
      h={props.profile ? '100%' : ''}
    >
      <Box
        maxW={['full', width]}
        w={'full'}
        h={'100%'}
        boxShadow={'2xl'}
        rounded={profile ? '' : 'md'}
        overflow={'hidden'}
        bg={props.error ? '#f2756a' : props.idle ? '#a5a5e7' : '#5556fc'}
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
            {Boolean(Boolean(profile) || Boolean(props.error)) && (
              <Text color={'white'}>{props.message}</Text>
            )}
          </Stack>

          {!Boolean(props.error) && (
            <>
              {Boolean(profile) ? (
                <Stack direction={'column'} justify={'center'} spacing={4}>
                  <UserItem itemName={props.following} label={'Following'} />
                  <UserItem itemName={props.followers} label={'Followers'} />
                  <UserItem itemName={props.name} label={'Login'} />
                  <UserItem itemName={props.realName} label={'Name'} />
                  <UserItem itemName={props.bio} label={'Bio'} />
                  <UserItem itemName={props.location} label={'location'} />
                  <UserItem itemName={props.blog} label={'Blog'} />
                </Stack>
              ) : (
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
              )}

              {Boolean(profile) ? (
                ''
              ) : (
                <>
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
            </>
          )}
          {Boolean(Boolean(profile) && Boolean(props.error)) && (
            <>
              <ChakraNextLinkButton
                href={`/`}
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
                Back
              </ChakraNextLinkButton>
            </>
          )}
        </Box>
      </Box>
    </Center>
  )
}
