import './Player.css'
import PropTypes from 'prop-types'

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
        <button onClick={onMinus}>-</button>
        <output className="Player__score">{score}</output>
        <button onClick={onPlus}>+</button>
      </div>
    </section>
  )
}
