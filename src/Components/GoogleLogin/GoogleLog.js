import React from 'react';
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';

export const GoogleLog = () => {
    return <GoogleLogin
        onSuccess={credentialResponse => {
          const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
          console.log(credentialResponseDecoded)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
    />;
  };


