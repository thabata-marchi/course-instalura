const addComment = ( comentarios, username ) => {
  const newCommented = {
    date: Date.now(),
    text: comentarios,
    userName: username
  }
  return newCommented;
}

export default addComment;