import React from 'react'
import HistoryPage from './HistoryPage'

export default {
  title: 'Pages/HistoryPage',
  component: HistoryPage,
}

const Template = args => <HistoryPage {...args} />

export const Default = Template.bind({})
Default.args = {
  games: [
    {
      nameOfGame: 'Carcassonne',
      players: [
        { name: 'John', score: 0 },
        { name: 'Jane', score: 20 },
      ],
    },
    {
      nameOfGame: 'Micro Macro',
      players: [
        { name: 'Bimmel', score: 30 },
        { name: 'Bommel', score: 20 },
      ],
    },
  ],
}
