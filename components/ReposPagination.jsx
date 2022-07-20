import {useState} from 'react'
import {Flex, Button, ListItem, Box, List, Heading} from '@chakra-ui/react'
import ReposItem from './ReposItem'

export default function Pagination({repos}) {
  const [currentPage, setcurrentPage] = useState(1)
  const [itemsPerPage, setitemsPerPage] = useState(6)

  const [pageNumberLimit, setpageNumberLimit] = useState(6)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

  const handleClick = event => {
    setcurrentPage(Number(event.target.id))
  }

  const pages = []
  for (let i = 1; i <= Math.ceil(repos.length / itemsPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = repos.slice(indexOfFirstItem, indexOfLastItem)
  console.log(currentPage)
  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <ListItem px={1}>
          <Button
            bg={number === currentPage ? '#5556fc' : ''}
            key={number}
            color={number === currentPage ? '#fff' : ''}
            id={number}
            onClick={handleClick}
            className={currentPage == number ? 'active' : null}
          >
            {number}
          </Button>
        </ListItem>
      )
    } else {
      return null
    }
  })

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1)

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <ListItem onClick={handleNextbtn}> &hellip; </ListItem>
  }

  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <ListItem onClick={handlePrevbtn}> &hellip; </ListItem>
  }

  return (
    <Flex
      flexDir={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'full'}
    >
      <Heading mt={6}>Repos</Heading>
      <ReposItem data={currentItems} />
      <List display="flex" justifyContent={'space-around'} mb={3} mt={3}>
        <ListItem>
          <Button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </Button>
        </ListItem>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <ListItem>
          <Button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </Button>
        </ListItem>
      </List>
    </Flex>
  )
}
