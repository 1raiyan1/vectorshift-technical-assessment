import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [table, setTable] = useState(
    data?.table || 'users'
  );

  return (
    <BaseNode
      title="Database"
      inputs={[
        { id: `${id}-query` }
      ]}
      outputs={[
        { id: `${id}-result` }
      ]}
    >
      <label>
        Table:
        <input
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};