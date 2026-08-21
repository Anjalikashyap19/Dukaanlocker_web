import React, { createContext, useContext, useState, useCallback } from 'react';
import ComingSoonModal from '../components/ComingSoonModal';

const ComingSoonContext = createContext(null);

export function ComingSoonProvider({ children }) {
  const [state, setState] = useState({
    isOpen: false,
    title: '',
    description: '',
    showWaitlist: true,
  });

  const openComingSoon = useCallback((opts) => {
    setState({
      isOpen: true,
      title: opts?.title || '',
      description: opts?.description || '',
      showWaitlist: opts?.showWaitlist !== false,
    });
  }, []);

  const closeComingSoon = useCallback(
    () => setState((s) => ({ ...s, isOpen: false })),
    []
  );

  return (
    <ComingSoonContext.Provider value={openComingSoon}>
      {children}
      <ComingSoonModal
        isOpen={state.isOpen}
        onClose={closeComingSoon}
        title={state.title}
        description={state.description}
        showWaitlist={state.showWaitlist}
      />
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  const ctx = useContext(ComingSoonContext);
  return ctx || (() => {});
}
