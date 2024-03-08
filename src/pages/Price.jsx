import { useParams } from 'react-router-dom';

function Price() {
  let { symbol } = useParams();
  
  return <div>Price: {symbol}</div>;
}

export default Price;
