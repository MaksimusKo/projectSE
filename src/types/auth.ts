// src/types/auth.ts
export interface User {
  username: string;
  token: string;
  profile_picture?: string; // Optional profile picture
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  profile_picture?: string; // Optional profile picture in the response
}
