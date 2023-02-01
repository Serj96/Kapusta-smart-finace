import { WrapperHomePage, WrapperImg } from './HomePage.styled';
import { Login } from '../Login/Login'
import Kapusta_mob from '../image/Kapusta_mob.png';
import Kapusta_tablet from '../image/Kapusta_tablet.png';
import Kapusta_desctop from '../image/Kapusta_desctop.png';
import { useLocation } from 'react-router-dom';
import { Registration } from 'components/Registration/Registration';
const HomePage = () => {
  const { pathname } = useLocation();
  return (
    <WrapperHomePage
      style={{
        marginTop: '150px',
      }}
    >
      <WrapperImg>
        <img
          srcSet={`${Kapusta_mob} 320w, ${Kapusta_tablet} 680w, ${Kapusta_desctop}   1279w, `}
          src={Kapusta_mob}
          alt="Logo"
        />
      </WrapperImg>
      <div>
        {pathname === '/home' && <Login />}
        {pathname === '/home/register' && <Registration />}
      </div>
    </WrapperHomePage>
  );
};

export default HomePage;
