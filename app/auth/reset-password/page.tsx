"use client";

import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Box, Avatar, Heading, Text, Button, VStack, useToast } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { Input } from "@/app/libs/shared/ui/input";
import resetPasswordStore from "./store";
import loadingStore from "@/app/store/loading.store";

export const Page: FC = observer(() => {
  const toast = useToast();

  const onClick = async () => {
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
            Create New Password
          </Heading>
        </Box>
        <Box mt={4}>
          <Text size='sm' color='GrayText'>
            Enter your new password below to complete the reset process
          </Text>
        </Box>
        <VStack mt={2} spacing={4}>
          <Input
            disabled={loadingStore.loading}
            label='New Password'
            placeholder='password'
            showEye
            name='password'
            value={resetPasswordStore.newPassword}
            type='password'
            onChange={(event) => resetPasswordStore.updateNewPassword(event.target.value)}
          />
          <Input
            disabled={loadingStore.loading}
            label='Confirm Password'
            placeholder='password'
            showEye
            name='password'
            value={resetPasswordStore.confirmPassword}
            type='password'
            onChange={(event) => resetPasswordStore.updateConfirmPassword(event.target.value)}
          />
        </VStack>
        <Button
          isLoading={loadingStore.loading}
          mt={8}
          width='100%'
          variant='solid'
          colorScheme='yellow'
          onClick={onClick}
        >
          Set new password
        </Button>
      </Box>
    </Box>
  );
});

export default Page;
