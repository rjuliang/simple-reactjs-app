import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import DatabaseConnector from './DatabaseConnector';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  async getCustomerDetails(id) {
    const database = new DatabaseConnector();
    this.setState({customerDetails: await database.getIndividualCustomer(id)})
  };

  render() {
    
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)

    const customerDetailsData = this.state.customerDetails.data;

    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{customerDetailsData.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
        {Object.keys(customerDetailsData).map(
          (keyName, keyIndex)=><p key={keyName}>
            {keyName}: {customerDetailsData[keyName]} 
            </p>
          )}
        </Panel.Body>
      </Panel>
    </div>)
  }
}
