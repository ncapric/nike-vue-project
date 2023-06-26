import { IUser } from "@/interfaces/User.interface"

export function getUserInitials(user: IUser) {
  const initials = `${user.name[0].toUpperCase()}. ${user.lastname[0].toUpperCase()}.`
  return initials
}