// components/FlagshipProvider.tsx
"use client";

import { FlagshipContainer } from "@thinkflagship/horizon-web-shorts";

export default function FlagshipProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const licenseKey = "pk_live_4aa47c892668d3fad8380051e3cf28812b917bbdcd6b0780.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTW9vbnNob3QiLCJwbGF0Zm9ybVR5cGUiOiJXRUIiLCJkb21haW4iOnsiZG9tYWluIjoiaHR0cHM6Ly93d3cudXNlaGVhZHN0YXJ0LmNvbSIsInZlcmlmaWVkIjpmYWxzZX0sImV4cGlyZXNBdCI6IjIxMjUtMTAtMzBUMTY6NTI6NTAuNTYyWiIsImNyZWF0ZWRCeSI6IjY5MWQ3ZmZmOTFiMmMxNjhkMzM3Nzg3MiIsInRlbmFudElkIjoiNjkxZDdmZmY5MWIyYzE2OGQzMzc3ODc0IiwiX2lkIjoiNjkyMzNiZTI5ZjhjYzRkZDNlYzg4MWJmIiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzYzOTE2NzcwLCJleHAiOjQ5MTc1MTY3NzB9.SQGQblwGFftrRkC75RZ3WHEZQSWfrK6Kj8r6RrjgMQc";

  return (
    <FlagshipContainer licenseKey={licenseKey} platformId="https://useheadstart.com/">
      {children}
    </FlagshipContainer>
  );
}