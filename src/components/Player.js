import './Player.css'
import PropTypes from 'prop-types'
import Button from './Button'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}
export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      {name}{' '}
      <div className="Player__buttons">
        <Button onClick={onMinus}>-</Button>
        <output className="Player__score">{score}</output>
        <Button onClick={onPlus}>+</Button>
      </div>
    </section>
  )
}
