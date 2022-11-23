import React from 'react';
import DocumentTitle from 'react-document-title';

import { ResetPasswordForm } from 'react-stormpath';

var ForgotPage = React.createClass({
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Forgot Password</h3>
              <hr />
            </div>
          </div>
          <ResetPasswordForm />
        </div>
      </DocumentTitle>
    );
  }
});

export default ForgotPage;
