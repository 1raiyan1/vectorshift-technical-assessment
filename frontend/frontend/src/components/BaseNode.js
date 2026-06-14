import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div
      style={{
       width: 260,
       minHeight: 'fit-content',
       border: '1px solid #334155',
       borderRadius: 16,
       padding: 16,
       background: '#FFFFFF',
       boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
       fontSize: '14px',
       fontFamily: 'Inter, Segoe UI, sans-serif',
       color: '#F8FAFC',
      }}
    >
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      <div
        style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '12px',
          color: '#F8FAFC',
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};