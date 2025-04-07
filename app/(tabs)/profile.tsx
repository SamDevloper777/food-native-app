import ProfileButton from "@/components/Profile/profileButton";
import { ProfileHeader } from "@/components/Profile/profileHeader";
import { RootState } from "@/utils/store";
import { memo } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

const MemoizedProfileHeader = memo(ProfileHeader);

const profileButtons = [
  "Profile Setting",
  "Manage Delivery Address",
  "My Wishlist",
  "Manage Payment",
  "My Orders History",
  "My Vouchers",
  "Log out",
];

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const renderButton = ({ item }: { item: string }) => (
    <ProfileButton title={item} />
  );

  return (
    <FlatList
      className="bg-white"
      data={profileButtons}
      renderItem={renderButton}
      keyExtractor={(item) => item}
      ListHeaderComponent={
        <MemoizedProfileHeader
          name={user?.name || "Guest"}
          image={
            user?.image || "https://randomuser.me/api/portraits/men/44.jpg"
          }
        />
      }
      initialNumToRender={3}
      maxToRenderPerBatch={8}
      windowSize={5}
      bounces={true}
      overScrollMode="auto"
      contentInset={{ top: 0, bottom: 1 }}
    />
  );
};

export default Profile;