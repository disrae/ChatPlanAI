import { useRouter } from "expo-router";
import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/styles";
import { useConvex, useMutation, useQuery } from "convex/react";
import { api } from "convex/_generated/api";

export default function Home() {
    const router = useRouter();
    const convex = useConvex();
    const [conversationName, setConversationName] = useState('');
    const createConversation = useMutation(api.conversations.createConversation);

    const handleStart = async () => {
        const conversationExists = await convex.query(api.conversations.exists, { name: conversationName as string });
        if (!conversationExists) {
            const result = await createConversation({
                name: conversationName, owner: "Danny", participants: ["Danny"]
            });
            console.log({ createConversation: result });
        }
        router.push({ pathname: `/${conversationName}` });
    };

    return (
        <SafeAreaView className="flex-1 bg-primary-dark">
            <ScrollView className="flex-col" contentContainerClassName="items-center">
                <View className="h-20"></View>
                <View className="border rounded-lg h-[500px] w-[80%] max-w-[400px] bg-primary-light justify-center items-center">
                    <AntDesign name="play" size={50} color="black" />
                </View>
                <View className="h-20"></View>
                <View className="">
                    <Text className="text-lg">
                        Enter a Conversation Name to start a new conversation
                    </Text>
                </View>
                <View className="h-6" />
                <TextInput
                    className="px-4 py-1 rounded outline-primary border border-primary text-lg"
                    placeholderTextColor={colors.primary.DEFAULT}
                    value={conversationName}
                    onChangeText={setConversationName}
                />
                <View className="h-6" />
                <TouchableOpacity
                    className="bg-primary rounded px-4 py-2"
                    onPress={handleStart}
                >
                    <Text className="text-white text-lg">Start</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
