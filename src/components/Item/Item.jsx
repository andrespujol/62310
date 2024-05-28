import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading, Center, Flex } from '@chakra-ui/react'

const Item = ({nombre, precio, img}) => {
  return (
    <Card maxW='sm' border='3px' borderColor='#243F4D' boxShadow='2xl'>
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius='md'
          boxSize='100%'
          objectFit='cover' 
          w={'300px'}
          h='300px' 
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Center height='2px' bg={'#243F4D'}>
      </Center>
      <Divider color={'#243F4D'}  />
      <CardFooter>
        <Flex spacing='2' justifyContent={'center'} align={'center'} w={'100%'}>
          <Button 
            variant='solid' 
            bg={'#243F4D'} 
            color={'#fff'}
            _hover={{ bg: '#3E6478', color: '#fff' }}
            >
            Ver detalle
          </Button>

        </Flex>
      </CardFooter>
    </Card>
  )
}

export default Item
