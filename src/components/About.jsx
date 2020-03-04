import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleModal } from '../actions';

const GLOBAL_LIBS = [
  {
    name: 'redux',
    url: 'https://redux.js.org/',
    use: 'Redux'
  },
  {
    name: 'moment.js',
    url: 'https://momentjs.com/',
    use: 'moment'
  },
  {
    name: 'lodash',
    url: 'http://lodash.com',
    use: '_'
  },
  {
    name: 'axios',
    url: 'https://github.com/axios/axios',
    use: 'axios'
  }
];

class About extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    const { toggleModal } = this.props;
    toggleModal();
  }

  render() {
    const { display } = this.props;
    return (
      <div>
        <div className="modal fade show" style={{ display }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">About JS Playground</h4>
              </div>
              <div className="modal-body">
                <p>
                  JS Playground is an experimental JavaScript PlayGround created
                  for Education and Testing Purposes
                </p>
                <div>
                  You can play around with JavaScript code here, also this
                  sandbox playground is hooked up directly with
                  <ul>
                    {GLOBAL_LIBS.map(lib => (
                      <li key={lib.name}>
                        <div
                          style={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'space-between'
                          }}
                        >
                          <a
                            href={lib.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {lib.name}
                          </a>
                          <span>Use as {lib.use}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <p>Enjoy</p>
                <div>
                  <div className="float-left">
                    <a
                      href="https://abolkog.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Khalid Elshafie
                    </a>
                  </div>
                  <div className="float-right">
                    <span className="small-text">
                      V{process.env.APP_VERSION}
                    </span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.close}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  display: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ code }) => ({ display: code.display });
export default connect(mapStateToProps, { toggleModal })(About);
