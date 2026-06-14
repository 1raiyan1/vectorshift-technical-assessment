import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(
    data?.condition || 'value > 10'
  );

  return (
    <BaseNode
      title="Condition"
      inputs={[
        { id: `${id}-input` }
      ]}
      outputs={[
        { id: `${id}-true` },
        { id: `${id}-false` }
      ]}
    >
      <label>
        If:
        <input
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};