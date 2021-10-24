const colorChanger = (color: string): string => {
  switch (color) {
    case '#4666F6':
      return '#FFCA29';
    case '#FFCA29':
      return '#2D54BC';
    case '#090031':
      return '#3A57FF';
    default:
      return '#4666F6';
  }
};
export default colorChanger;
