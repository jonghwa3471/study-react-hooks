export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      try {
        onCancel();
      } catch (error) {
        console.log(error);
        return;
      }
    }
  };
  return confirmAction;
};
