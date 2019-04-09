import {
  UPDATE_PARTICIPATION,
  UPDATE_INDEX,
  ADD_INDEX,
  UPDATE_BUS,
  UPDATE_MENU,
  UPDATE_MODAL,
  SEND_FORM,
  RESET_FORM
} from "./types";

export const updateParticipation = (name, user, checked) => {
  user.participants.forEach(participant => {
    if (participant.name === name) {
      if (!checked) {
        participant.bus = checked
        participant.dish = "Sin seleccionar"
      }
      participant.atendance = checked;
    }
  });
  return {
    type: UPDATE_PARTICIPATION,
    payload: user
  };
};

export const updateBus = (name, user, checked) => {
  user.participants.forEach(participant => {
    if (participant.name === name) participant.bus = checked;
  });
  return {
    type: UPDATE_BUS,
    payload: user
  };
};

export const sendForm = () => {
  return {
    type: SEND_FORM,
    payload: true
  }
}

export const resetForm = () => {
  return {
    type: RESET_FORM,
    payload: false
  }
}

export const updateMenu = (name, user, menu) => {
  console.log(name, user, menu);
  user.participants.forEach(participant => {
    if (participant.name === name) participant.dish = menu;
  });
  return {
    type: UPDATE_MENU,
    payload: user
  };
};

export const updateIndexFormPage = index => {
  return {
    type: UPDATE_INDEX,
    payload: index
  };
};

export const updateModal = (showModal, dish) => {
  return {
    type: UPDATE_MODAL,
    payload: {
      showModal,
      dish
    }
  };
};

export const addIndex = index => {
  return {
    type: ADD_INDEX,
    payload: index + 1
  };
};
