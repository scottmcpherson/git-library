import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class DocumentList extends Component {
  render() {
    const { documents } = this.props

    return (
      <div>
        <BootstrapTable
          data={documents}
          striped
          hover
          selectRow={{ mode: 'checkbox' }}
          search
        >
          <TableHeaderColumn
            isKey
            dataField="title"
          >
            Document
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default DocumentList