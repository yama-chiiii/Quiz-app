export const HomePage = () => {
    return (
        <div className="bg-blue-deep flex justify-center">
            <div className="flex flex-col items-center justify-center h-screen text-white">
                <h1 className="mb-8 font-black text-3xl">Let's Play Quiz.</h1>
                <p className="mb-8 font-black text-sm">
                    チュートリアルとして作成したクイズアプリです
                </p>
                <a href="./question" className="flex justify-center items-center w-full py-3 rounded-lg text-white text-lg font-bold bg-brand-cyan hover:opacity-80">
                    クイズを始める
                </a>
            </div>
        </div>
    );
};
