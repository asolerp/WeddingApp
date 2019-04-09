import { UPDATE_INDEX, ADD_INDEX, UPDATE_MODAL, SEND_FORM, RESET_FORM } from "../actions/types";

const form_state = (
  state = {
    index: 0,
    direction: null,
    modal: false,
    formStatus: undefined,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_INDEX:
      return { ...state, index: action.payload };
    case ADD_INDEX:
      return { ...state, index: action.payload };
    case UPDATE_MODAL:
      return { ...state, modal: action.payload.showModal, dish: action.payload.dish };
      case SEND_FORM:
      return { ...state, formStatus: true };
      case RESET_FORM:
      return { ...state, formStatus: false };
    default:
      return state;
  }
};

export default form_state;
