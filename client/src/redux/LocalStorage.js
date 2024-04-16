export const saveState = (state) => {
  try {
    const serilized = JSON.stringify(state);
    localStorage.setItem("vootel", serilized);
  } catch (err) {
    console.log("Error While saving the state :", err);
  }
};

export const loadState = () => {
  try {
    const serilized = localStorage.getItem("vootel");
    if (serilized === null) {
      return undefined;
    }
    return JSON.parse(serilized);
  } catch (error) {
    console.log("Error while Loading the state :", error);
  }
};
