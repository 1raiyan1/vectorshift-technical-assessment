import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const DelayNode = ({ id, data }) => {
  const [seconds, setSeconds] = useState(
    data?.seconds || 5
  );

  return (
    <BaseNode
      title="Delay"
      inputs={[
        { id: `${id}-trigger` }
      ]}
      outputs={[
        { id: `${id}-delayed` }
      ]}
    >
      <label>
        Seconds:
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};