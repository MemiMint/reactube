"use client";

import { FormControl, FormLabel, Input as ChackraInput, InputGroup, InputLeftElement, Divider, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { InputProps } from "./props";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";

const EyePasswordVisibility: FC<{ showPassword: boolean; onClick(): void; }> = (props) => {
    return props.showPassword ? <MdVisibility onClick={props.onClick} fontSize={18} style={{ color: "rgba(0, 0, 0, .5)", cursor: "pointer" }} /> : <MdVisibilityOff onClick={props.onClick} fontSize={18} style={{ color: "rgba(0, 0, 0, .5)", cursor: "pointer" }} />
}

export const Input: FC<InputProps> = ({ name, type = "text", value = "", label = "", placeholder = "", showEye = false, required = false, disabled = false, leftElement, onChange }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [isFocus, setIsFocus] = useState<boolean>(false);

    return (
        <FormControl isRequired={required}>
            <FormLabel>
                <Text as="b" fontSize="xs" color={isFocus ? "#F8CA15" : "rgba(0, 0, 0, 0.6)"}>{label}</Text>
            </FormLabel>
            <InputGroup>
                {leftElement && (
                    <InputLeftElement ml={1} >
                        {leftElement}
                        <Divider borderColor={isFocus ? "#F8CA15" : "inherit"} borderWidth="thin" height={6} ml={2} orientation="vertical" />
                    </InputLeftElement>
                )}
                {
                    showEye ? (
                        <InputLeftElement ml={1} >
                            <EyePasswordVisibility showPassword={showPassword} onClick={() => setShowPassword(!showPassword)} />
                            <Divider borderColor={isFocus ? "#F8CA15" : "inherit"} borderWidth="thin" height={6} ml={2} orientation="vertical" />
                        </InputLeftElement>
                    ) : null
                }
                <ChackraInput
                    onBlur={() => setIsFocus(false)}
                    onFocus={() => setIsFocus(true)}
                    borderWidth={2}
                    outline="none"
                    disabled={disabled}
                    focusBorderColor="transparent"
                    _focus={{ borderColor: "#F8CA15", borderWidth: 2, outline: "none" }}
                    type={showEye ? (showPassword ? "text" : "password") : type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    _placeholder={placeholder}
                    pl={(leftElement || showEye) ? 12 : 4}
                    placeholder={placeholder}
                    borderRadius={6}
                    fontSize={14}
                    color={isFocus ? "#F8CA15" : "rgba(0, 0, 0, 0.6)"}
                />
            </InputGroup>
        </FormControl>
    )
}