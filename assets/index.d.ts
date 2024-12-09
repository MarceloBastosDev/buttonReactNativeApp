declare module '*.jpg'
declare module 'react-native-torch' {
    const Torch: {
        switchState: (state: boolean) => void;
    };
    export default Torch;
}
