// Custom hook for handling HelloWorldCard button click
export const useHelloWorldClick = () => {
    const handleClick = (): void => {
        alert('Welcome to React with TypeScript and Material UI!')
    }

    return { handleClick }
}
