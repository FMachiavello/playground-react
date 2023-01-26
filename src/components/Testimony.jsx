import '../css/Testimony.css';

export function Testimony(props){
  return (
    <>
    <div className='testimony-container'>
      <img className='testimony-image'
      src={require(`../images/${props.name}.jpg`)}
      alt={`Foto de ${props.name}`} />
      <div className='testimony-text-container'>
        <p className='testimony-name'>{props.name} de {props.hood}</p>
        <p className='testimony-role'>{props.role}  del equipo</p>
        <p className='testimony-text'>"{props.testimony}"</p>
      </div>
    </div>
    </>
  );
}
