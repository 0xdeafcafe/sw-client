export const SaveDataToLocalStorage = (data: any) => {
  var a;
  if (localStorage.getItem("session") === null) {
    a = [];
  } else {
    a = JSON.parse(localStorage.getItem("session") || "[]");
  }
  a.push(data);
  localStorage.setItem("session", JSON.stringify(a));
};

export const removeFromLocalStore = (url: string) => {
  const storage = JSON.parse(localStorage.getItem("session") || "[]");
  const newStorage = storage.filter((e: string) => e !== url);

  localStorage.removeItem("session");
  localStorage.setItem("session", JSON.stringify(newStorage));
};
