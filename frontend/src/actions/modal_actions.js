export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, eventId) => {
  return {
    type: OPEN_MODAL,
    modal: modal,
    eventId, eventId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
