import { useState } from 'react';
import { ResultModal } from './components/ResultModal';
import { useStore } from './store';

export const SubmitButton = () => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      setResult(data);
      setOpen(true);
    } catch (error) {
      console.error(error);
      alert('Failed to submit pipeline');
    }
  };

  return (
  <>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          background: '#2563EB',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '10px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(37,99,235,0.25)',
        }}
      >
        Submit Pipeline
      </button>
    </div>

    <ResultModal
      open={open}
      result={result}
      onClose={() => setOpen(false)}
    />
  </>
);
};