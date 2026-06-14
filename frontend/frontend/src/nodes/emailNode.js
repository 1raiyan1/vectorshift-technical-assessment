import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const EmailNode = ({ id, data }) => {
  const [recipient, setRecipient] = useState(
    data?.recipient || 'user@example.com'
  );

  return (
    <BaseNode
      title="Email"
      inputs={[
        { id: `${id}-message` }
      ]}
      outputs={[
        { id: `${id}-sent` }
      ]}
    >
      <label>
        To:
        <input
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};