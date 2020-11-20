import React from 'react';
import { useRouter } from 'next/router';

export default function Test() {
  const router = useRouter();

  const updateQuery = (value) => {
    router.push({
      pathname: router.pathname,
      query: {
        id: value,
      }
    })
  }

  return (
    <>
      <p>
        Current asPath: <code>{router.asPath}</code>
      </p>
      <p>
        Current pathname: <code>{router.pathname}</code>
      </p>
      <p>
        Current query: <code>{JSON.stringify(router.query)}</code>
      </p>
      <button onClick={() => updateQuery('foo')}>Foo</button>
      <button onClick={() => updateQuery('bar')}>Bar</button>
    </>
  )
}
