import React, { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

const DynamicDeploy = dynamic(() => import('../components/TestDeploy'), {
  loading: () => 'Loading...',
  ssr: false,
})

const Home = () => { 
  return (
    <div>
      <DynamicDeploy />
    </div>
  )
}

export default Home;