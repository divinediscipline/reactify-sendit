import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchParcelOrdersAction } from '../actions/fetchParcelOrdersAction';

class Orders extends Component {

  // state = {  }
  componentDidMount () {
    this.props.fetchParcelOrdersAction();
  }
  displayParcelOrders = () => {
    <h2> Your orders will be displayed here</h2>
  };
  render() {
    return (
      <React.Fragment>
        {this.props.allUserParcelOrders === true ? (
          this.displayParcelOrders()
        ) : (
          <p className="default-text">
            You have no delivery orders. Create one by clicking on the 'New
            order' button.
          </p>
        )}
        <p className="default-text">
            You have no delivery orders. Create one by clicking on the 'New
            order' button.
          </p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  allUserParcelOrders: state.fetchParcelOrders
});

export default connect(
  mapStateToProps,
  { fetchParcelOrdersAction }
)(Orders);
