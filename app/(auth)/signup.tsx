import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/assets/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      <View className="flex-1 bg-white">
        <View className="flex-1 bg-white relative">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label={"Name"}
            onChangeText={(value) => setForm({ ...form, name: value })}
            value={form.name}
            placeholder="Enter your name"
            icon={icons.person}
          />
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
            title="Sign Up"
            className="mt-6"
            onPress={onSignUpPress}
          />

          {/* {OAuth} */}
          <OAuth/>

          <Link
            href="/(auth)/signin"
            className="text-md text-center text-general-200 mt-10"
          >
            <Text>Already have an Account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default signup;
