import React, { Component } from 'react'
import { message, Button,  Form, Icon, Input } from 'antd';
const FormItem = Form.Item;

    
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  
  class Mensaje extends Component{
    constructor(){
        super();
        this.state = {
          data: [],
          pagination: {},
          loading: false,
        }
      }
    
      componentDidMount(){
        this.props.form.validateFields();
        this.setState({ loading: true });
        fetch('http://localhost:3001/api/v1/Insert/Alumnos')
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

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const matriculaError  = isFieldTouched('Matricula') && getFieldError('Matricula');
        const nombreError     = isFieldTouched('userName') && getFieldError('userName');
        const apellidosError  = isFieldTouched('userApellido') && getFieldError('userApellido');
        const carreraError    = isFieldTouched('userCarrera') && getFieldError('userCarrera');
        const grupoError      = isFieldTouched('userGrupo') && getFieldError('userGrupo');
        const aulaError       = isFieldTouched('userAula') && getFieldError('userAula');
        const cargaError      = isFieldTouched('userCarga') && getFieldError('userCarga');

        return(
              
            // <Button onClick={this.state.data.message}>Success</Button>
        <Form onSubmit={this.handleSubmit}>


        <FormItem
          validateStatus={matriculaError ? 'error' : ''}
          help={matriculaError || ''}
        >
          { //principio
            getFieldDecorator('Matricula', {
            rules: [{ required: true, message: 'Por favor ingresa tu matricula!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Matricula" />
          )
          //fin 
          } 
        </FormItem>

        <FormItem
          validateStatus={nombreError ? 'error' : ''}
          help={nombreError || ''}
        >
          { //principio
            getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Por favor ingresa tu matricula!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" />
          )
          //fin 
          } 
        </FormItem>

        <FormItem
          validateStatus={apellidosError ? 'error' : ''}
          help={apellidosError || ''}
        >
          {getFieldDecorator('userApellido', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellidos" />
          )}

        </FormItem>


        <FormItem
          validateStatus={carreraError ? 'error' : ''}
          help={carreraError || ''}
        >
          {getFieldDecorator('userCarrera', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Carrera" />
          )}

        </FormItem>


        <FormItem
          validateStatus={grupoError ? 'error' : ''}
          help={grupoError || ''}
        >
          {getFieldDecorator('userGrupo', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Grupo" />
          )}

        </FormItem>


        <FormItem
          validateStatus={aulaError ? 'error' : ''}
          help={aulaError || ''}
        >
          {getFieldDecorator('userAula', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Aula" />
          )}

        </FormItem>


        <FormItem
          validateStatus={cargaError ? 'error' : ''}
          help={cargaError || ''}
        >
          {getFieldDecorator('userCarga', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Carga" />
          )}

        </FormItem>


        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Registrar
          </Button>
        </FormItem>
      </Form>
          )
      }
  }
  const WrappedHorizontalLoginForm = Form.create()(Mensaje);

  export default WrappedHorizontalLoginForm;