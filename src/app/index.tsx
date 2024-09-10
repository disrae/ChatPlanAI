import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, SafeAreaView } from "react-native";
// import { useMediaQuery } from "react-responsive"; // For responsive design with @expo/match-media
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Component() {
    // const isLargeScreen = useMediaQuery({ minWidth: 768 });

    return (
        <SafeAreaView className="flex-1 bg-primary-dark mx-4 py-4">
            <View className="flex-1 flex-col min-h-[100vh]">
                {/* Header */}
                <View className="flex-row items-center h-14 px-4 lg:px-6">
                    <TouchableOpacity className="flex items-center justify-center">
                        <AntDesign name="message1" size={24} color="black" />
                        <Text className="sr-only">Chat App</Text>
                    </TouchableOpacity>
                    <View className="ml-auto flex-row gap-4 sm:gap-6">
                        <NavLink title="Features" />
                        <NavLink title="Pricing" />
                        <NavLink title="About" />
                        <NavLink title="Contact" />
                    </View>
                </View>

                {/* Main Content */}
                <ScrollView>
                    {/* First Section */}
                    <View className="py-12 w-full items-center md:py-24 lg:py-32 px-4 md:px-6 space-y-10 xl:space-y-16 gap-y-4">
                        <Text className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            Plan projects with customers using AI-powered summaries
                        </Text>
                        <Text className="text-muted-foreground text-center md:text-xl max-w-[700px] mx-auto">
                            Our chat app helps business owners create detailed project plans with customers using AI-generated summaries
                            of your conversations.
                        </Text>
                        <View className="flex-row gap-x-4 justify-center">
                            <TouchableOpacity className="bg-primary px-4 py-2 rounded-md">
                                <Text className="text-white text-sm font-medium">Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="border border-primary px-4 py-2 rounded-md">
                                <Text className="text-primary text-sm font-medium">Learn More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Second Section */}
                    <View className="w-full py-6 md:py-24 lg:py-32 bg-muted gap-y-4">
                        <Text className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                            See the app in action
                        </Text>
                        <View className="grid gap-x-6 sm:grid-cols-2 md:grid-cols-3">
                            {["Project Planning", "AI-Powered Summaries", "Collaboration Tools"].map((title, index) => (
                                <View key={title} className="flex-col my-6 bg-background rounded-lg border">
                                    <Image
                                        source={require("../assets/images/example.png")}
                                        resizeMode="cover"
                                        className="w-full h-[250px] rounded-lg"
                                    />
                                    <View className="p-4">
                                        <Text className="text-lg font-bold">{title}</Text>
                                        <Text className="text-muted-foreground">See how the app can help you create detailed project plans.</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Customer Testimonials */}
                    <View className="w-full py-12 md:py-24 lg:py-32">
                        <Text className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                            What our customers say
                        </Text>
                        <View className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {["Max", "Alex", "Sarah"].map((name, index) => (
                                <TestimonialCard key={index} name={name} />
                            ))}
                        </View>
                    </View>

                    {/* Sign-Up Section */}
                    <View className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                        <Text className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                            Get started with the Chat App
                        </Text>
                        <View className="mx-auto w-full max-w-sm space-y-2">
                            <View className="flex-row gap-2">
                                <TextInput
                                    className="flex-1 border border-primary rounded-md px-4 py-2"
                                    placeholder="Enter your email"
                                />
                                <TouchableOpacity className="bg-primary px-4 py-2 rounded-md">
                                    <Text className="text-white text-sm font-medium">Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <Text className="text-xs text-muted-foreground text-center">
                                Already have an account?{" "}
                                <TouchableOpacity>
                                    <Text className="underline">Sign In</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    </View>
                </ScrollView>

                {/* Footer */}
                <View className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <Text className="text-xs text-muted-foreground">&copy; 2024 Chat App. All rights reserved.</Text>
                    <View className="sm:ml-auto flex-row gap-4 sm:gap-6">
                        <NavLink title="Terms of Service" />
                        <NavLink title="Privacy" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

// Helper Components

const NavLink = ({ title }) => (
    <TouchableOpacity>
        <Text className="text-sm font-medium hover:underline underline-offset-4">{title}</Text>
    </TouchableOpacity>
);

const DemoCard = ({ title }) => (
    <View className="flex-col lg:flex-row gap-6 bg-background rounded-lg border">
        <Image source={require("../assets/images/example.png")} className="object-contain aspect-video h-[200px] rounded-lg" />
        <View className="p-4">
            <Text className="text-lg font-bold">{title}</Text>
            <Text className="text-muted-foreground">See how the app can help you create detailed project plans.</Text>
        </View>
    </View>
);

const TestimonialCard = ({ name }) => (
    <View className="bg-background rounded-lg p-6 space-y-4">
        <Text className="font-bold">{name}</Text>
        <Text className="text-muted-foreground">
            The Chat App has been a game-changer for our business. The AI-powered summaries have helped us create much more
            detailed project plans with our customers.
        </Text>
    </View>
);





// import { useRouter } from "expo-router";
// import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from "react-native";
// import { useState } from "react";
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { colors } from "@/styles";
// import { useConvex, useMutation, useQuery } from "convex/react";
// import { api } from "convex/_generated/api";
// import '@expo/match-media';

// export default function Home() {
//     const router = useRouter();
//     const convex = useConvex();
//     const [conversationName, setConversationName] = useState('');
//     const createConversation = useMutation(api.conversations.createConversation);

//     const handleStart = async () => {
//         const conversationExists = await convex.query(api.conversations.exists, { name: conversationName as string });
//         if (!conversationExists) {
//             const result = await createConversation({
//                 name: conversationName, owner: "Danny", participants: ["Danny"]
//             });
//             console.log({ createConversation: result });
//         }
//         router.push({ pathname: `/${conversationName}` });
//     };

//     return (
//         <SafeAreaView className="flex-1 bg-primary-dark">
//             <ScrollView className="flex-col" contentContainerClassName="items-center">
//                 <View className="h-20"></View>
//                 <View className="border rounded-lg h-[500px] w-[80%] max-w-[400px] bg-primary-light justify-center items-center">
//                     <AntDesign name="play" size={50} color="black" />
//                 </View>
//                 <View className="h-20"></View>
//                 <View className="">
//                     <Text className="text-lg">
//                         Enter a Conversation Name to start a new conversation
//                     </Text>
//                 </View>
//                 <View className="h-6" />
//                 <TextInput
//                     className="px-4 py-1 rounded outline-primary border border-primary text-lg"
//                     placeholderTextColor={colors.primary.DEFAULT}
//                     value={conversationName}
//                     onChangeText={setConversationName}
//                 />
//                 <View className="h-6" />
//                 <TouchableOpacity
//                     className="bg-primary rounded px-4 py-2"
//                     onPress={handleStart}
//                 >
//                     <Text className="text-white text-lg">Start</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }
