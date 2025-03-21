import Button from '@/components/common/Button';
import { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((prevCount) => prevCount + 1)} variant="info">
      Clicked {count} times
    </Button>
  );
}

export default CounterButton;
