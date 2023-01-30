import { WrapperHomePage, WrapperImg } from './HomePage.styled';
import { Login } from '../Login/Login'
import Kapusta_mob from '../image/Kapusta_mob.png';
import Kapusta_tablet from '../image/Kapusta_tablet.png';
import Kapusta_desctop from '../image/Kapusta_desctop.png';
const HomePage = () => {
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
        <Login />
      </div>
    </WrapperHomePage>
  );
};

export default HomePage;
