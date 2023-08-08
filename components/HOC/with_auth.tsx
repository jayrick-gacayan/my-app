'use client';

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { ComponentType } from "react";

export function WithAuth(WrappedComponent: ComponentType<any>) {
  return function (props: any) {
    const router = useRouter();
    const { status } = useSession();

    if (status === 'unauthenticated') {
      router.push('/');
      return null;
    }
    else if (status === 'loading') {
      return <div>Loading....</div>
    }

    return <WrappedComponent {...props} />
  }
}
