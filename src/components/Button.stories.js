import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Hello',
  isActive: false,
}

export const Active = Template.bind({})
Active.args = {
  children: 'I am active',
  isActive: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'I am disabled',
  disabled: true,
}
