import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-20 bg-black text-white">
            <h1 className="text-xl font-light" style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>What is Countify?</h1>
            <h2 className="text-5xl font-extrabold mt-4 mb-2 text-center" style={{ fontFamily: "Atma, sans-serif", fontWeight: 600 }}>
                Get answers. Find inspiration. <br /> Be more productive.
            </h2>
            <p className="text-lg font-light mt-2 mb-8 text-center max-w-md">
               বাংলা GPT এমন একটি প্ল্যাটফর্ম, যেখানে আপনি বাংলা প্রম্পটের মাধ্যমে সহজেই বাংলায় ChatGPT-এর ব্যবহার কার্যকরভাবে করতে পারবেন।
            </p>
            <div className="flex gap-4">
                <button className="px-8 py-0 bg-white text-black rounded-full font-medium hover:bg-black hover:text-white">
                ⤷ Start now
                </button>
                <button className="px-6 py-3  border-white rounded-full font-medium hover:bg-white hover:text-black">
                    Download the app ➤
                </button>
            </div>
        </div>
        </div>
    );
};

export default Banner;