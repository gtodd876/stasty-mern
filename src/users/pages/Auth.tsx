import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/useForm';
import { AuthContext } from '../../shared/context/auth-context';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from '../../shared/util/validators';
import './AuthForm.css';
import Card from '../../shared/components/UIElements/Card';

export default function Auth() {
  const [formState, inputHandler, setFormData] = useForm(initialState, false);
  const [isLoginMode, setIsLoginMode] = React.useState(true);
  const authContext = React.useContext(AuthContext);

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send this to the backend
    console.log(formState.inputs);
    authContext.login();
  };

  const handleModeSwitch = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        { ...formState.inputs, name: { value: '', isValid: false } },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login required</h2>
      <hr />
      <form className="recipe-form" onSubmit={handleLoginSubmit}>
        {!isLoginMode && (
          <Input
            elementType="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your name"
            onInput={inputHandler}
          />
        )}
        <Input
          elementType="input"
          type="email"
          label="Email"
          id="email"
          errorText="Please enter a valid email"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />
        <Input
          elementType="input"
          type="password"
          label="Password"
          id="password"
          errorText="Please enter a valid password (at least 6 characters)"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGN UP'}
        </Button>
      </form>
      <Button inverse type="button" onClick={handleModeSwitch}>
        SWITCH TO {isLoginMode ? 'SIGN UP' : 'LOGIN'}
      </Button>
    </Card>
  );
}

const initialState = {
  // keys need to be same as id's of the inputs
  email: {
    value: '',
    isValid: false,
  },
  password: {
    value: '',
    isValid: false,
  },
};
