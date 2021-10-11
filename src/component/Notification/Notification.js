import PropTypes from 'prop-types';
export default function Notification({ title }) {
  return <section>{title && <h3>{title}</h3>}</section>;
}
Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
