import ProgressBar from 'react-bootstrap/ProgressBar';
interface value{
  progress:number;
}

function Progress(props:value) {
  return <ProgressBar now={props.progress} />;
}

export default Progress;