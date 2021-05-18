import React from 'react'
import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const StartPlayer = Template.bind({})
StartPlayer.args = {
  name: 'John Doe',
  score: 0,
}

export const PlayerWithScore = Template.bind({})
PlayerWithScore.args = {
  name: 'Jane Doe',
  score: 40,
}
