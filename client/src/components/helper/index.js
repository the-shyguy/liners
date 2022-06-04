export const stmt = () => {
  const date = new Date().getFullYear();
  const line = `Copyright ©${date} LinerApp.`;

  return line;
};

export const dateFormatter = (time) => {
  return time.split("T")[0].replace(/-/g, "/").split("/").reverse().join("/");
};
