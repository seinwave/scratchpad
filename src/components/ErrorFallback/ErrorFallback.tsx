export const ErrorFallback = (error: any, resetErrorBoundary: Function) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button>Try again</button>
    </div>
  );
};
