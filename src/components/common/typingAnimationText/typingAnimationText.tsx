import { useState, useEffect } from 'react';

export const TypingAnimationText = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDisplayedText('');
        setIndex(0);
    }, [text]);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    return (
        <span>{displayedText}</span>
    );
};