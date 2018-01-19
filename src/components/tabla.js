import React, { Component } from 'react'
import { Table } from 'antd';

const columns = [
    { title: 'Matricula', width: 100, dataIndex: 'Matricula', key: 'Matricula', fixed: 'left' },
    { title: 'Nombre', width: 120, dataIndex: 'Nombre', key: 'Nombre', fixed: 'left' },
    { title: 'Apellidos', width: 200, dataIndex: 'Apellidos', key: '1' },
    { title: 'Carrera', dataIndex: 'Carrera', key: '2' },
    { title: 'Grupo', dataIndex: 'Grupo', key: '3' },
    { title: 'Aula', dataIndex: 'Aula', key: '4' },
    { title: 'Cargo', dataIndex: 'Cargo', key: '5' },
  ];

  class Tablita extends Component{
    constructor(){
        super();
        this.state = {
          data: [],
          pagination: {},
          loading: false,
        }
      }
    
      componentDidMount(){
        this.setState({ loading: true });
        fetch('http://localhost:3001/api/v1/Alumnos')
        .then(results =>{
          return results.json();
        }).then(data => {
          const pagination = { ...this.state.pagination };
          pagination.total = data.totalCount
          this.setState({
            loading: false,
            data: data.recordset,
            pagination
          });
        })
    }
      render(){
          return(
            <Table columns={columns} dataSource={this.state.data} scroll={{ x: 1300 }} />
          )
      }
  }

  export default Tablita;