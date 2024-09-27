export type LeftElementPasswordProps = {

}

export type InputProps = {
    label?: string;
    placeholder?: string;
    leftElement?: React.ReactNode
    name: string;
    value: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    type: "text" | "email" | "password";
    showEye?: boolean;
    required?: boolean;
    disabled?: boolean;
}