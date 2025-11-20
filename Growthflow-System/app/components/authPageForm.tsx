import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import {
  SignInPage,
  type AuthProvider,
  type AuthResponse,
} from '@toolpad/core/SignInPage';
import { createTheme } from '@mui/material/styles';

const providers = [
  { id: 'github', name: 'GitHub' },
  { id: 'google', name: 'Google' },
  { id: 'credentials', name: 'Email and Password' },
];

const signIn: (provider: AuthProvider) => void | Promise<AuthResponse> = async (
  provider,
) => {
  const promise = new Promise<AuthResponse>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve({ error: 'This is a mock error message.' });
    }, 500);
  });
  return promise;
};

export default function ThemeSignInPage() {
  // preview-end

  return (
    // preview-start
    <AppProvider >
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{
          form: { noValidate: true },
          submitButton: {
            color: 'primary',
            variant: 'contained',
          },
        }}
        sx={{
          '& form > .MuiStack-root': {
            marginTop: '6rem',
            rowGap: '0.5rem',
          },
        }}
      />
    </AppProvider>
    // preview-end
  );
}
