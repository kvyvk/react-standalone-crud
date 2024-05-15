import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div className="row w-100">
            <div className="col-md-9">
              <a class="navbar-brand" href="#">Demo CPAD Class</a>
            </div>
            <div className="col-md-2  me-auto">
              <form class="d-flex">

                <input onClick={() => setIsAdding(true)}
                  className='btn btn-success ms-auto'
                  type="button"
                  value="Add Employee"
                />

              </form>
            </div>


            <div className="col-md-1 mx-auto">
              <Logout setIsAuthenticated={setIsAuthenticated} />
            </div>

          </div>

        </div>
      </nav>
    </>
  );
};

export default Header;
