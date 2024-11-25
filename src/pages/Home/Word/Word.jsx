import React, { useState } from 'react';
import wordsCounter from 'word-counting';
import "./Word.css";
const Word = () => {
    const [inputText, setInputText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // State to handle animation

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);

        // Count words for plain text
        const count = wordsCounter(text).wordsCount;
        setWordCount(count);

        // Count characters
        setCharCount(text.length);

        // Trigger animation
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500); // Reset animation after 500ms
    };

    return (
        <div>
            <div className="flex items-center justify-center p-4">
                <div
                    className={`bg-white rounded-lg p-6 w-full max-w-[80%] ${
                        isAnimating ? 'animate-move' : ''
                    }`}
                >
                    <textarea
                        className="w-full h-40 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        placeholder="Type or paste your text here..."
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <div className="mt-4 text-lg text-gray-700">
                        <strong style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>Word Count:</strong> {wordCount}
                    </div>
                    <div className="mt-2 text-lg text-gray-700">
                        <strong style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>Character Count:</strong> {charCount}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Word;





//previous code
// import React, { useState } from 'react';
// import wordsCounter from 'word-counting';

// const Word = () => {
//     const [inputText, setInputText] = useState('');
//     const [wordCount, setWordCount] = useState(0);
//     const [charCount, setCharCount] = useState(0); // Add state for character count

//     const handleInputChange = (e) => {
//         const text = e.target.value;
//         setInputText(text);

//         // Count words for plain text
//         const count = wordsCounter(text).wordsCount;
//         setWordCount(count);

//         // Count characters
//         setCharCount(text.length); // Includes spaces and special characters
//     };

//     return (
//         <div>
//             <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//                 <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
//                     <h1 className="text-2xl font-bold text-gray-800 mb-4">Word Count Application</h1>
//                     <textarea
//                         className="w-full h-40 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Type or paste your text here..."
//                         value={inputText}
//                         onChange={handleInputChange}
//                     />
//                     <div className="mt-4 text-lg text-gray-700">
//                         <strong>Word Count:</strong> {wordCount}
//                     </div>
//                     <div className="mt-2 text-lg text-gray-700">
//                         <strong>Character Count:</strong> {charCount}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Word;