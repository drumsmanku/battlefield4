import ProgressBar from 'react-bootstrap/ProgressBar';
interface value{
  progress:number;
}

function Progress(props:value) {
  return <ProgressBar variant='warning' style={{height:'0.5rem', backgroundColor:'black' }} now={props.progress} />;
}

export default Progress;