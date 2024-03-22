import ProgressBar from 'react-bootstrap/ProgressBar';
interface value{
  progress:number;
}

function Progress(props:value) {
  return <ProgressBar style={{height:'0.5rem' , color:'orange'}} now={props.progress} />;
}

export default Progress;