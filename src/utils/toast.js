const toasts = new Set();

export function showToast(message, type = 'info') {
  const id = Math.random().toString(36).substr(2, 9);
  const toast = { id, message, type };
  toasts.add(toast);

  const event = new CustomEvent('toast', { detail: toast });
  window.dispatchEvent(event);

  setTimeout(() => {
    const removeEvent = new CustomEvent('toast-remove', { detail: { id } });
    window.dispatchEvent(removeEvent);
    toasts.delete(toast);
  }, 3000);
}
