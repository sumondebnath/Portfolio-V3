import { Component } from 'react';

/**
 * Catches render-time errors anywhere below it and shows a themed fallback
 * instead of a blank page. The Reload button is the recovery action.
 */
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Uncaught UI error:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main
        id="main"
        className="flex min-h-dvh items-center justify-center bg-bg px-5 py-10 text-ink"
      >
        <div className="w-full max-w-[28rem] rounded-2xl border border-line-strong bg-surface p-6 text-center sm:p-8">
          <span className="badge">Something went wrong</span>
          <h1 className="mt-1 text-[1.5rem] font-bold leading-[1.2] tracking-[-0.02em] text-ink md:text-[2rem]">
            This page hit an error
          </h1>
          <p className="mt-3 text-sm leading-[1.7] text-muted">
            The portfolio couldn't render. Reloading usually fixes it.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-primary mt-6"
          >
            Reload page
          </button>
        </div>
      </main>
    );
  }
}
