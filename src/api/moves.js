import { post } from 'axios'

export async function addMove({
  game,
  board,
  move
}) {
  return post('/.netlify/functions/move', { game, board, move });
}

export async function getAIMove(board) {
  console.log('helloh', board)
  return post('/.netlify/functions/test', board);
}

export default { 
  addMove,
  getAIMove,
}