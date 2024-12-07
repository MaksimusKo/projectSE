const API_ENDPOINT = 'https://a11f-34-125-126-247.ngrok-free.app';

const headers = {
  'Content-Type': 'application/json',
  'ngrok-skip-browser-warning': '69420',
};

export const authHeaders = (token?: string) => ({
  ...headers,
  ...(token && { Authorization: `Bearer ${token}` }),
});

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_ENDPOINT}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'ngrok-skip-browser-warning': '69420',
    },
    body: new URLSearchParams({
      grant_type: 'password',
      username,
      password,
      scope: '',
      client_id: '',
      client_secret: '',
    }),
  });

  if (!response.ok) throw new Error('Login failed');
  return response.json();
};

export const fetchUserProfile = async (token: string) => {
  const response = await fetch(`${API_ENDPOINT}/profile`, {
    method: 'GET',
    headers: authHeaders(token),
  });

  if (!response.ok) throw new Error('Failed to fetch user profile');
  return response.json();
};

export const uploadIcon = async (token: string, file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_ENDPOINT}/upload_icon`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'ngrok-skip-browser-warning': '69420',
    },
    body: formData,
  });

  if (!response.ok) throw new Error('Failed to upload icon');
  return response.json();
};

export const sendMessage = async (input: string, history: string[]) => {
  const response = await fetch(`${API_ENDPOINT}/predict`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ input, history }),
  });

  if (!response.ok) throw new Error('Failed to get response');
  return response.json();
};
