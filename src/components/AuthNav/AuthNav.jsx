// import {
//   NavStyled,
//   // NameFirstLetter,
//   Mail,
//   ExitMobile,
//   Decor,
//   ExitTablet,
// } from './AuthNav.styled';

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUser } from 'Redux/kapustaSlice';
// import { logOut } from 'Redux/authOperaions';
// import logoutSvg from '../../images/logout.svg';
// import { ModalWindow } from 'components/ModalWindowNav/ModalWindowNav';
// import { getIsLoggedIn } from 'Redux/kapustaSlice';

// export const AuthNav = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const isLogIn = useSelector(getIsLoggedIn);

//   const userEmail = useSelector(getUser);
//   const dispatch = useDispatch();

//   // Відкрити модалку
//   const handleModalOpen = () => {
//     setModalOpen(true);
//   };

//   // Закрити модалку
//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   // Логаут
//   const handleClick = () => {
//     dispatch(logOut());
//   };

//   return (
//     isLogIn && (
//       <>
//         <NavStyled>
//           {/* тут буде перша буква імені юзера */}
//           {/* <NameFirstLetter>{userEmail[0].toUpperCase()}</NameFirstLetter> */}

//           {/* тут відображається мейл юзера */}
//           <Mail>{userEmail}</Mail>

//           {/* Свг виходу в мобілці */}
//           <ExitMobile src={logoutSvg} alt="logout" onClick={handleModalOpen} />

//           <Decor />

//           {/* Кнопка виходу в таблетці */}
//           <ExitTablet type="button" onClick={handleModalOpen}>
//             Exit
//           </ExitTablet>
//         </NavStyled>

//         {/* Модалка при виході */}
//         {modalOpen && (
//           <ModalWindow closeModal={handleModalClose} dispatch={handleClick}>
//             Do you really want to leave?
//           </ModalWindow>
//         )}
//       </>
//     )
//   );
// };

import {
  NavStyled,
  // NameFirstLetter,
  // Mail,
  ExitMobile,
  Decor,
  ExitTablet,
} from './AuthNav.styled';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from 'Redux/selectors-nav';
import { logOut } from 'Redux/authOperaions';
import logoutSvg from '../../images/logout.svg';
import { ModalWindow } from 'components/ModalWindowNav/ModalWindowNav';

export const AuthNav = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // const userEmail = useSelector(selectUser);
  const dispatch = useDispatch();

  // Відкрити модалку
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  // Закрити модалку
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Логаут
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <NavStyled>
        {/* тут буде перша буква імені юзера */}
        {/* <NameFirstLetter>{userEmail[0].toUpperCase()}</NameFirstLetter> */}

        {/* тут відображається мейл юзера */}
        {/* <Mail>{userEmail}</Mail> */}

        {/* Свг виходу в мобілці */}
        <ExitMobile src={logoutSvg} alt="logout" onClick={handleModalOpen} />

        <Decor />

        {/* Кнопка виходу в таблетці */}
        <ExitTablet type="button" onClick={handleModalOpen}>
          Exit
        </ExitTablet>
      </NavStyled>

      {/* Модалка при виході */}
      {modalOpen && (
        <ModalWindow closeModal={handleModalClose} dispatch={handleClick}>
          Do you really want to leave?
        </ModalWindow>
      )}
    </>
  );
};
