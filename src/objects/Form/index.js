import React from 'react';

import Input from '../../components/Input';


const Form = () => (
  <form>
    <Input
      type="email"
      placeholder="Digite seu e-mail"
      required
    />

    <Input
      type="password"
      placeholder="Digite sua senha"
      required
    />
  </form>
);

export default Form;
