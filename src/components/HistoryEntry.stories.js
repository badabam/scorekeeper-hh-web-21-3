import React from 'react'
import HistoryEntry from './HistoryEntry'

export default {
  title: 'HistoryEntry',
  component: HistoryEntry,
}

const Template = args => <HistoryEntry {...args} />

export const Default = Template.bind({})
Default.args = {
  nameOfGame: 'Carcassonne',
  players: [
    { name: 'John Doe', score: 40 },
    { name: 'Jane Doe', score: 30 },
  ],
}
