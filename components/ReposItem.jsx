import {
  Center,
  Grid,
  GridItem,
  Box,
  Heading,
  Stack,
  Link,
  Text,
} from '@chakra-ui/react'

import UserItem from './UserItem'

const HeaderCard = ({name, description, link}) => {
  return (
    <Stack spacing={0} align={'center'} mb={5}>
      <Heading
        fontSize={'2xl'}
        fontWeight={500}
        fontFamily={'body'}
        color="white"
      >
        <Link href={link} target={'_blank'} rel="noreferrer">
          {name}
        </Link>
      </Heading>
      <Text color={'white'}>{Boolean(description) ? description : '-'}</Text>
    </Stack>
  )
}

const BodyCard = ({children}) => {
  return (
    <Stack direction={'row'} justify={'center'} spacing={4}>
      {children}
    </Stack>
  )
}

const FooterCard = ({updated_at}) => {
  let updateTime = updated_at.split('T')[0]
  return (
    <Stack spacing={0} align={'center'} mt={2}>
      <Text fontSize={'sm'} color={'white'}>
        Last Update
      </Text>
      <Text color="white" fontWeight={600}>
        {updateTime}
      </Text>
    </Stack>
  )
}
export default function ReposItem({data}) {
  return (
    <Center my={'auto'}>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        width={['full', '800px']}
        gap={6}
      >
        {data.map((repo, index) => {
          const {
            name,
            description,
            html_url,
            forks,
            open_issues,
            watchers_count,
            stargazers_count,
            updated_at,
          } = repo

          return (
            <GridItem
              key={index}
              bg={'#0079ff'}
              textAlign={'center'}
              p={5}
              rounded={4}
            >
              <HeaderCard
                name={name}
                description={description}
                link={html_url}
              />
              <BodyCard>
                <UserItem label={'Watch'} itemName={watchers_count} />
                <UserItem label={'Stars'} itemName={stargazers_count} />
                <UserItem label={'Issues'} itemName={open_issues} />
                <UserItem label={'Forks'} itemName={forks} />
              </BodyCard>
              <FooterCard updated_at={updated_at} />
            </GridItem>
          )
        })}
      </Grid>
    </Center>
  )
}
