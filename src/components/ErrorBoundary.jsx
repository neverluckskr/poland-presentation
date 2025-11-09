import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50 p-5">
          <div className="max-w-2xl w-full bg-dark-card border-2 border-primary/50 rounded-2xl p-8 text-center">
            <h1 className="text-4xl font-black text-primary mb-4">⚠️ Ошибка загрузки</h1>
            <p className="text-xl text-gray-300 mb-6">
              Извините, произошла ошибка при загрузке презентации.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-6 py-3 bg-primary hover:bg-primary/80 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Перезагрузить страницу
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-primary mb-2">Подробности ошибки (только для разработки)</summary>
                <pre className="bg-black/50 p-4 rounded-lg overflow-auto text-sm text-gray-400">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
