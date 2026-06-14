export const ResultModal = ({ open, result, onClose }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: '#1E293B',
          color: '#F8FAFC',
          padding: '24px',
          borderRadius: '16px',
          minWidth: '350px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        }}
      >
        <h2 style={{ marginTop: 0 }}>
          Pipeline Analysis
        </h2>

        <p>
          <strong>Nodes:</strong> {result?.num_nodes}
        </p>

        <p>
          <strong>Edges:</strong> {result?.num_edges}
        </p>

        <p>
          <strong>DAG Status:</strong>{' '}
          {result?.is_dag
            ? '✅ Valid DAG'
            : '❌ Contains Cycle'}
        </p>

        <button
          onClick={onClose}
          style={{
            background: '#2563EB',
            color: 'white',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};