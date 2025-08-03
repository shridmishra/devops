
interface PropType {
    placeholder: string;
}

export default function TextInput({ placeholder }: PropType) {

    return <input placeholder={placeholder} type="text" />

}