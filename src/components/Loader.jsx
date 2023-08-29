import React, { useEffect, useState } from 'react'
import { Spinner, Center } from '@chakra-ui/react';

const Loader = () => {
    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => {
        clearTimeout(loadingTimeout);
      };
    }, []);
  
    const [isLoading, setIsLoading] = useState(true);

    return isLoading ? (
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
        ) : null;
      };

export default Loader;