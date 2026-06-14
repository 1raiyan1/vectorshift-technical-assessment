import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const APINode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(
    data?.endpoint || 'https://api.example.com'
  );

  return (
    <BaseNode
      title="API"
      inputs={[
        { id: `${id}-request` }
      ]}
      outputs={[
        { id: `${id}-response` }
      ]}
    >
      <label>
        Endpoint:
        <input
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};