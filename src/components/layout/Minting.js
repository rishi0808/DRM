import { Flex, Image, Spinner, Text } from "@chakra-ui/react";

const Minting = ({ grantingKey = false }) => {

    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            position='fixed'
            bottom='0px'
            left='0px'
            h='100vh'
            w='100vw'
            backgroundColor='white'
            zIndex={5}
        >
            
            <Image src='/minting.gif' maxW='180px' />
            {grantingKey ?
                <Text fontWeight='bold' fontSize='3xl' mt='20px' maxW='500px' align='center'>Please grant yourself an Unlock key</Text>
                : <Text fontWeight='bold' fontSize='3xl' mt='20px' maxW='500px' align='center'>Please wait while your NFT contract is being published...</Text>
            }
            <Spinner mt='10px' size='xl' color="brand.500" />
            <Text fontWeight='semibold' color='#AEAEAE' mt='20px' maxW='500px' align='center'>Your membership may take some minutes to load, remember to refresh the page</Text>
        </Flex>
    )
}

export default Minting;
