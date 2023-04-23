import { UserProfile } from "@clerk/nextjs/app-beta";

function UserProfilePage() {
  return (
  <>
  <UserProfile path="/profile" />
  </>)
}
export default UserProfilePage;
