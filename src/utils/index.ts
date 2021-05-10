export const getImagePath = (file: string | undefined): string => {
  const url: string =
    process.env.REACT_APP_IMG_BASE_URL || `${process.env.PUBLIC_URL}/covers/`;
  let path = file;

  if (!file) path = 'placeholder.jpg';

  return `${url}/${path}`;
};

export const extra = 1;
