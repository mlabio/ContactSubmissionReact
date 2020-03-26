import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { contacts: [], loading: true };
  }

  componentDidMount() {
    this.populateContactsData();
  }

  static renderContactsTable(contacts) {
    const data = {
      columns: [
        {
          label: 'First Name',
          field: 'firstname',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Last Name',
          field: 'lastName',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Address',
          field: 'address',
          sort: 'asc',
          width: 270
        },
        {
          label: 'State',
          field: 'state',
          sort: 'asc',
          width: 200
        },
        {
          label: 'ZipCode',
          field: 'zipCode',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Phone Number',
          field: 'phoneNumber',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Note Field',
          field: 'noteField',
          sort: 'asc',
          width: 100
        }
      ],
      rows: contacts
    };

    return (
      <MDBDataTable
        striped
        bordered
        hover
        data={data}
      />
    )
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderContactsTable(this.state.contacts);

    return (
      <div>
        <h1 id="tabelLabel" >Contacts</h1>
        {contents}
      </div>
    );
  }
  
  async populateContactsData() {
    const response = await fetch('api/contacts');
    const data = await response.json();
    this.setState({ contacts: data, loading: false });
  }
}
