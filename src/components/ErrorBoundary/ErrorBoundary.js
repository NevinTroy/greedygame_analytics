import React from 'react';
import './ErrorBoundary.css';

const ErrorBoundary = () => {
  return (
    <div className='error'>
        <img src={require('../../logo.svg')} alt='No Data found ' />
        <div className='text'>
            <h1>Hey! Something's off!</h1>
            <h1>We couldn't display the given data.</h1>
            <h3>Try changing your filters or selecting a different date</h3>
        </div>
    </div>
  )
}

export default ErrorBoundary