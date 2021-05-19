import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => <Navigation {...args} />

export const Default = Template.bind({})
Default.args = {
  currentPageId: 'play',
  pages: [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
  ],
}
