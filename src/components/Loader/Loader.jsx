import { MutatingDots } from 'react-loader-spinner';
import { Overlay } from 'components/Overlay/Overlay.styled';
export const Loader = () => {
  return (
    <Overlay>
      <MutatingDots
         height="100"
         width="100"
         color="#ffffff"
         secondaryColor="#ffffff"
         radius="10.5"
         ariaLabel="mutating-dots-loading"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
      />
    </Overlay>
  );
};
