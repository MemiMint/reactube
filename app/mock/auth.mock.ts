import { MockUser } from "./user.types";

export const mockLogin = async (username: string, password: string): Promise<MockUser | null> => {
  let mockUser: MockUser | null = null;

  try {
    const request = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const response: MockUser = await request.json();

    mockUser = response;
  } catch (error) {
    console.log(error);
  } finally {
    return mockUser;
  }
};
