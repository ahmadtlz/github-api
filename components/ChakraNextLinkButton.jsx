import Link from 'next/link'
import {Button} from '@chakra-ui/react'
export default function ChakraNextLinkButton({href, children, ...props}) {
  return (
    <Link href={href} passHref>
      <Button as="a" {...props}>
        {children}
      </Button>
    </Link>
  )
}
