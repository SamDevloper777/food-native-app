import ProfileButton from "@/components/Profile/profileButton";
import { ProfileHeader } from "@/components/Profile/profileHeader";
import { RootState } from "@/utils/store";
import { memo } from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";

const MemoizedProfileHeader = memo(ProfileHeader);

const profileButtons = [
  "Profile Setting",
  "Manage Delivery Address",
  "My Wishlist",
  "Manage Payment",
  "My Orders History",
  "Log out",
];

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const loading = !user; // Replace with your actual loading condition if available

  const renderButton = ({ item }: { item: string }) => (
    <ProfileButton title={item} />
  );

  if (loading) {
    return (
      <FlatList
        className="bg-white"
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => (
          <View className="px-4 py-3">
            <ShimmerPlaceholder
              LinearGradient={LinearGradient}
              style={{ height: 50, borderRadius: 10 }}
            />
          </View>
        )}
        ListHeaderComponent={
          <View className="px-4 pt-4 pb-6">
            <ShimmerPlaceholder
              LinearGradient={LinearGradient}
              style={{ height: 80, borderRadius: 20 }}
            />
          </View>
        }
      />
    );
  }

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
