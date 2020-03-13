const takeImgLike = (like) => {
  return like > 0 ? 
    require("../../res/images/s2-checked.png") : require("../../res/images/s2.png")
}

const photoLike = (like, likesNumber) => {
  let qnt = likesNumber;
  like ? qnt-- : qnt++;
  return [!like, qnt];
}

export {takeImgLike, photoLike};