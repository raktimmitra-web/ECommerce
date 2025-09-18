// toast.js
export const showToast = (message, type = 'success') => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `
    max-w-xs w-full bg-${type === 'success' ? 'green' : 'red'}-500 text-white px-4 py-2 rounded shadow 
    animate-fade-in-out
  `;
  toast.innerText = message;

  container.appendChild(toast);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
};
