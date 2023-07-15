import { MutatingDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
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
    </div>
  );
};
