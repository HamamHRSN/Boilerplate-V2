// Higher Order Component (HOC) - A component (HOC) that renders other component(s)
// Reuse code
// Render Hijacking
// prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
   
      <div>
           <h1>Info</h1>
           <p>The info is: {props.info}</p>
      </div>

);

const withAdminWarning = (WrappedComponent) => {
      return (props) => (
          <div>
              {props.isAdmin && <p>This is private info. Please Don't share!</p>}
              <WrappedComponent {...props} />
          </div>
      );
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
            <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the infos!</p>
            )}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));