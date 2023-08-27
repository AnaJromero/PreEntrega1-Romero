import React, { useEffect, useState } from 'react'
import { Spinner, Center } from '@chakra-ui/react';

const Loader = () => {

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => {
        clearTimeout(timeout);
      };
    }, []);
  
    return (
      <>
        {isLoading && (
          <Center
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="rgba(255, 255, 255, 0.8)"
            zIndex={1000}
          >
            <Spinner size="xl" />
          </Center>
        )}
      </>
    );
  }; 

export default Loader