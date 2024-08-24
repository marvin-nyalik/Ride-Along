import { View, Text, ScrollView, Image } from "react-native";
import React, { useState, useCallback } from "react";
import { icons, images } from "@/assets/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import { router } from "expo-router";
import { useSignIn } from '@clerk/clerk-expo'

const signin = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/');
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, form.email, form.password]);
  
  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      <View className="flex-1 bg-white">
        <View className="flex-1 bg-white relative">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label={"Email"}
            onChangeText={(value) => setForm({ ...form, email: value })}
            value={form.email}
            placeholder="Enter your email"
            icon={icons.email}
          />
          <InputField
            label={"Password"}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
            value={form.password}
            placeholder="Enter your password"
            icon={icons.lock}
          />

          <CustomButton
            title="Sign In"
            className="mt-6"
            onPress={onSignInPress}
          />

          {/* {OAuth} */}
          <OAuth />

          <Link
            href="/(auth)/signup"
            className="text-md text-center text-general-200 mt-10"
          >
            <Text>Don't have an Account?</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default signin;
