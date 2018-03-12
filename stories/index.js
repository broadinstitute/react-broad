import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Greeting from '../lib/Greeting';

storiesOf('Greeting', module)
  .add('with text', () => (
    <Greeting message="Hello, world!" />
  ))
  .add('with some emoji', () => (
  	<Greeting message="😀 😎 👍 💯" />
  ));
