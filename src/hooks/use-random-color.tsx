const colorSchemes = [
    "teal", 
    "blue", 
    "green", 
    "orange", 
    "red", 
    "purple", 
    "pink", 
    "cyan", 
    "yellow", 
    "pink", 
    "cyan",
    "facebook",
    "whatsapp",
    "telegram",
];

const getRandomColorScheme = () => {
    const randomIndex = Math.floor(Math.random() * colorSchemes.length);
    return colorSchemes[randomIndex];
};

export default getRandomColorScheme;