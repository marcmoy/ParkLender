const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(130, 121, 121, 0.46)',
    zIndex          : 1000
  },
  content : {
    position        : 'relative',
    margin          : '100px auto',
    border          : '1px solid #ccc',
    height          : 'auto',
    width           : '400px',
    borderRadius    : '15px',
    padding         : '20px',
    zIndex          : 1001
  }
};

export default ModalStyle;
