// Add the required props
export const UserInfo = ({ todo }) =>
  todo.user && (
    <a className="UserInfo" href={`malto:${todo.user.email}`}>
      {todo.user.name}
    </a>
  );
