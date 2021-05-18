export default function greet(...names) {
  if (names.length === 0) return 'Hi, stranger'
  if (names.length > 1) return 'Hi, guys'

  const name = names[0]
  return `Hi, ${name === 'Jerry' ? 'coach' : name}`
}
