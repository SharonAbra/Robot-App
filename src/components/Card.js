const Card = (props) => {
  const {robotinfo} = props;
  const {name,email,username,id} = robotinfo;
  console.log(id)
  return (
    <>
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img src={`https://robohash.org/${id}/?size=200x200`} alt='robot' />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{username}</p>
        </div>
      </div>
    </>
  )
}
export default Card;
