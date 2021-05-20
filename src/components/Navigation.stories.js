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

export const ThreeButtons = Template.bind({})
ThreeButtons.args = {
  currentPageId: 'one',
  pages: [
    { title: 'Eins', id: 'one' },
    { title: 'Zwei', id: 'two' },
    { title: 'Drei', id: 'three' },
  ],
}
