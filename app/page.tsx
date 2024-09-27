import Link from "next/link";
import { Suspense } from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { Logo } from "./libs/shared/ui/logo";
import { MockUser } from "./mock/user.types";

export default async function Page() {
  const request = await fetch('https://dummyjson.com/users', {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });

  const response = await request.json();

  const user: MockUser[] = response;

  return (
    <Suspense fallback={<p>Loading...</p>} >
      <pre>
        { JSON.stringify(user, null, 2) }
      </pre>
    </Suspense>
  );
}
