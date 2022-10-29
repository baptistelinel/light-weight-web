import Button from '../button/button.component';
import style from './modal.module.scss';

interface Props {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal: React.FC<Props> = ({ title, children, isOpen, toggle }) => {
  return isOpen ? (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h3>{title}</h3>
        <div>{children}</div>
        <Button type="button" onClick={toggle}>
          Cancel
        </Button>
      </div>
    </div>
  ) : null;
};

export default Modal;
