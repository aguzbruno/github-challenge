export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getUsers = async (since: number = 0) => {
  const response = await fetch(`${BASE_URL}/users?since=${since}&per_page=10`);
  if (!response.ok) {
    throw new Error('Error fetching users');
  }
  return await response.json();
};

export const searchUsers = async (term: string) => {
  const response = await fetch(`${BASE_URL}/search/users?q=${term}`);
  if (!response.ok) {
    throw new Error('Error searching users');
  }
  return await response.json();
};

export const getUserDetails = async (username: string) => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error('Error fetching user details');
  }
  return await response.json();
};
