import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error = useRouteError();
  return (
    <>
    {error ? (
      <div id="error-page">
        <h2>Page not found 404 </h2>
        <p>{error.statusText || error.message}</p>
      </div>
    ) : null}
  </>
  
  )
}

export default NotFound
