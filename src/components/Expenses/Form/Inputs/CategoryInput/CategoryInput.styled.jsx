export const colorStyles = {
  control: styles => ({
    ...styles,
    borderRadius: 'none',
    border: '2px solid #fff',
    borderBottomRightRadius: '16px',
    width: '280px',
    height: '44px',
    boxShadow: 'none',
    ':hover': {
      border: '2px solid #fff',
    },

    '@media screen and (min-width: 768px)': {
      width: '186px',
      border: '2px solid #F5F6FB',
      borderRadius: '0px',
      ':hover': {
        border: '2px solid #F5F6FB',
      },
    },
  }),
  option: styles => {
    return {
      ...styles,
      color: '#C7CCDC',
      // ':selection': { backgroundColor: '#F5F6FB', color: ' #52555F' },
    };
  },
};
