import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  const variableMatches =
    currText.match(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g) || [];

  const variables = [
  ...new Set(
    variableMatches.map((match) =>
      match.replace(/[{}]/g, '').trim()
    )
  ),
];

  const inputHandles = variables.map((variable) => ({
    id: `${id}-${variable}`,
  }));

  return (
    <BaseNode
      title="Text"
      inputs={inputHandles}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={Math.max(3, currText.split('\n').length)}
          style={{
            width: `${Math.max(180, currText.length * 8)}px`,
            resize: 'none',
          }}
        />
      </label>
    </BaseNode>
  );
};