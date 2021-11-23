import React, { lazy } from 'react'
import AppContainer from './components/AppContainer'

// @ts-expect-error
const UserPanel = lazy(()=> import('appUser/UserPanel'))
// @ts-expect-error
const PostPanel = lazy(()=> import('appPost/PostPanel'))

export default function App() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <AppContainer>
        <UserPanel />
        <PostPanel />
      </AppContainer>
    </React.Suspense>
  )
}