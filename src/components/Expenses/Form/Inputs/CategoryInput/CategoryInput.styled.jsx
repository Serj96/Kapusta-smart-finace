export const colourStyles = {
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
  option: (styles, state) => {
    return {
      ...styles,
      '&:hover': { backgroundColor: '#F5F6FB', color: ' #52555F' },
      backgroundColor: state.isFocused ? '#F5F6FB' : 'normal',
      color: state.isFocused ? '#52555F' : '#C7CCDC',
    };
  },
  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      fontSize: '12px',
      lineHeight: '14px',
      display: 'flex',
      alignItems: 'center',
      letterSpacing: ' 0.02em',
      color: '#C7CCDC',
    };
  },
};
