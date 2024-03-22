import ProgressBar from 'react-bootstrap/ProgressBar';
interface value{
  progress:number;
}

function Progress(props:value) {
  return <ProgressBar variant='warning' style={{height:'0.3rem', backgroundColor:'rgb(38, 38, 38)', borderRadius:'0rem' }} now={props.progress} />;
}

export default Progress;