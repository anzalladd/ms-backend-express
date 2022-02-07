const path = (filename: string) => {
  return filename.replace(/^.*[\\\/]/, "");
};

export default path;
