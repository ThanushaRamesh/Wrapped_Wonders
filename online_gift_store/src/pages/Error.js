import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops it is a dead end..!!</h1>
        <Link to='/' className='btn btn-primary' data-testid='errorLink'>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
