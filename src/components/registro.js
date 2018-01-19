import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Registro extends Component{
    // onInputChange (e) {
    //     this.setState({ name: e.target.value });
    //   }
      
    //   onSubmit (e) {
    //     fetch (`localhost:3000/api/categories/create/${this.state.name}`, {
    //       method: 'POST'
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //       if (res.success) { // exito
    //         alert('Categoría creada');
    //       }
    //     });
    //   }
    render(){
        return(
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Registro);
export default Registro;