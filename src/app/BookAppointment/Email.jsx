// components/Email.js
"use client"; // This indicates that this is a client component

import * as React from 'react';
import { Html, Button } from "@react-email/components";

export function Email({ url }) {
  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}

export default Email;
