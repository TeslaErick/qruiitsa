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
          data: []
        }
        this.handleSubmit =  this.handleSubmit.bind(this)
      }
    
      componentDidMount(){
        this.props.form.validateFields();
    }

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', JSON.stringify(values));
            console.log('')

            fetch('http://localhost:3001/api/v1/Alumnos/Insert',{
              method: 'post',
              headers: {
                "Content-type": "multipart/form-data"
              },          
              body: JSON.stringify(values)
            })
            .then(results =>{
              return results.json();
            }).then(data => {
              this.setState({
                data: data.recordset,
              });
            })
          }
        });
      }
      render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const matriculaError  = isFieldTouched('Matricula') && getFieldError('Matricula');
        const nombreError     = isFieldTouched('Nombre') && getFieldError('Nombre');
        const apellidosError  = isFieldTouched('Apellidos') && getFieldError('Apellidos');
        const carreraError    = isFieldTouched('Carrera') && getFieldError('Carrera');
        const grupoError      = isFieldTouched('Grupo') && getFieldError('Grupo');
        const aulaError       = isFieldTouched('Aula') && getFieldError('Aula');
        const cargaError      = isFieldTouched('Carga') && getFieldError('Carga');

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
            getFieldDecorator('Nombre', {
            rules: [{ required: true, message: 'Por favor ingresa tu nombre!' }],
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
          {getFieldDecorator('Apellidos', {
            rules: [{ required: true, message: 'Por favor ingresa tus apellidos!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apellidos" />
          )}

        </FormItem>


        <FormItem
          validateStatus={carreraError ? 'error' : ''}
          help={carreraError || ''}
        >
          {getFieldDecorator('Carrera', {
            rules: [{ required: true, message: 'Por favor ingresa tu carrera!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Carrera" />
          )}

        </FormItem>


        <FormItem
          validateStatus={grupoError ? 'error' : ''}
          help={grupoError || ''}
        >
          {getFieldDecorator('Grupo', {
            rules: [{ required: true, message: 'Por favor ingresa tu grupo!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Grupo" />
          )}

        </FormItem>


        <FormItem
          validateStatus={aulaError ? 'error' : ''}
          help={aulaError || ''}
        >
          {getFieldDecorator('Aula', {
            rules: [{ required: true, message: 'Por favor ingresa tu aula!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Aula" />
          )}

        </FormItem>


        <FormItem
          validateStatus={cargaError ? 'error' : ''}
          help={cargaError || ''}
        >
          {getFieldDecorator('Cargo', {
            rules: [{ required: true, message: 'Por favor ingresa tu cargo!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Cargo" />
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