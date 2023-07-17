export const setFromPayload = (payload) => ({
  type: "SET_FORM_DATA",
  payload: payload,
});
export const updateFile = (file) => ({
  type: "UPDATE_FILE",
  file: file,
});
