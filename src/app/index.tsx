import { useRouter } from "expo-router";
import { View, Text, Button, SafeAreaView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-col items-center">
            <View className="h-20"></View>
            <View className="border rounded-lg h-[60%] w-[80%] bg-primary-light justify-center items-center">
                <AntDesign name="play" size={50} color="black" />
            </View>
            <View className="h-20"></View>
            <Button title="Go to Conversations" onPress={() => router.push('/conversation')} />
        </SafeAreaView>
    );
}
