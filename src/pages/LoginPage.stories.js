import LoginPage from './LoginPage'

export default {
  title: 'LoginPage',
  component: LoginPage,
}

const Template = args => <LoginPage {...args} />

export const Default = Template.bind({})
Default.args = {}
