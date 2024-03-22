import ProgressBar from 'react-bootstrap/ProgressBar';
interface value{
  progress:number;
}

function Progress(props:value) {
  return <ProgressBar variant='warning' style={{height:'0.3rem', backgroundColor:'#333333', borderRadius:'0rem' }} now={props.progress} />;
}

export default Progress;