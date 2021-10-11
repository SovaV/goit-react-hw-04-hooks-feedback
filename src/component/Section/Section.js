import PropTypes from 'prop-types';
import s from './Section.module.css';
export default function Section({ title, children }) {
  return (
    <section className={s.box}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
