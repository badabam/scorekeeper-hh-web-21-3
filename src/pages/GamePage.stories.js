import React from 'react'
import GamePage from './GamePage'

export default {
  title: 'Pages/GamePage',
  component: GamePage,
}

const Template = args => <GamePage {...args} />

export const Default = Template.bind({})
Default.args = {
  nameOfGame: 'Carcassonne',
  players: [
    { name: 'John', score: 0 },
    { name: 'Jane', score: 20 },
  ],
}
