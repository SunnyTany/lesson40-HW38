import { UserInterface } from "./UserInterface"

const User = ({user}: {user: UserInterface}) => {
  return (
    <li>
      {user.name}
    </li>
  )
}

export default User