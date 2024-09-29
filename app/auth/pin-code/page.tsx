"use client";

import React from "react";
import { observer } from "mobx-react-lite";
import {
  Box,
  Avatar,
  Heading,
  Text,
  HStack,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import pinCodeStore from "./store";
import loadingStore from "@/app/store/loading.store";

export const Page = observer(() => {
  const toast = useToast();

  const onChange = async () => {
    loadingStore.toggleLoading();

    try {
      setTimeout(() => {
        toast({
          title: "Email sent",
          status: "success",
          duration: 2000,
        });
        loadingStore.toggleLoading();
      }, 2000);
    } catch {
      toast({
        title: "Could not send Email",
        status: "error",
        duration: 2000,
      });
    }
  };

  return (
    <Box width='100vw' height='100vh'>
      <Box
        position='absolute'
        p={4}
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        bgColor='white'
        boxShadow='lg'
        width={400}
        borderRadius={4}
      >
        <Box display='flex' alignItems='center' justifyContent='flex-start' gap={2}>
          <Avatar size='sm' bg='#F8CA15' icon={<FaLock />} />
          <Heading as='h5' fontSize='lg'>
            Enter your input code
          </Heading>
        </Box>
        <Box mt={4}>
          <Text size='sm' color='GrayText'>
            Enter the PIN code we sent you through mail
          </Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' mt={4}>
          <HStack>
            <PinInput
              isDisabled={loadingStore.loading}
              value={pinCodeStore.pin}
              onChange={(value) => {
                pinCodeStore.updatePin(value);

                if (pinCodeStore.pin.length === 4) {
                  onChange();
                }
              }}
              size='lg'
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
});

export default Page;
