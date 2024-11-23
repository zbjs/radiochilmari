'use client';

import { useState, useRef, useEffect } from 'react';
import ReadioChilmaryLogo from '@/assets/icons/readio_icon.png';
import Image from 'next/image';
import { FaPlay, FaPause, FaHeart } from 'react-icons/fa';

const RadioPlayer: React.FC = () => {
    const [playbackSpeed, setPlaybackSpeed] = useState('1x');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const audioUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amar_Sonar_Bangla_-_official_vocal_music_of_the_National_anthem_of_Bangladesh.ogg"; // Replace with your audio URL

    const handleSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPlaybackSpeed(event.target.value);
        if (audioRef.current) {
            audioRef.current.playbackRate = parseFloat(event.target.value);
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    };

    const handleProgressClick = (e: React.MouseEvent) => {
        if (audioRef.current) {
            const progressBar = e.currentTarget as HTMLElement;
            const newTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
            audioRef.current.currentTime = newTime;
        }
    };

    // Event listener to update the progress bar
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            return () => {
                audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    // Format time in minutes:seconds
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="mt-6 sm:mt-10 relative z-10 rounded-xl shadow-xl">
            <div className="bg-white border-slate-100 transition-all duration-500 dark:bg-slate-800  dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                <div className="flex items-center space-x-4">
                    <Image
                        src={ReadioChilmaryLogo}
                        loading="lazy"
                        decoding="async"
                        alt="Radio"
                        className="flex-none rounded-lg bg-slate-100"
                        width={88}
                        height={88}
                    />
                    <div className="min-w-0 flex-auto space-y-1 font-semibold">
                        <p className="text-cyan-500 transition-all duration-500 dark:text-cyan-400 text-sm leading-6">
                            <abbr title="সম্প্রচার">৯৯.</abbr> ২
                        </p>
                        <h2 className="text-slate-500 transition-all duration-500 dark:text-slate-400 text-sm leading-6 truncate">
                            রেডিও চিলমারী
                        </h2>
                        <p className="text-slate-900 transition-all duration-500 dark:text-slate-50 text-sm">
                            শোনো বাহে, জাগো বাহে
                        </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="relative" onClick={handleProgressClick}>
                        <div className="bg-slate-100 transition-all duration-500 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="bg-cyan-500 transition-all duration-500 dark:bg-cyan-400"
                                role="progressbar"
                                aria-label="music progress"
                                aria-valuenow={currentTime}
                                aria-valuemin={0}
                                aria-valuemax={duration}
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            ></div>
                        </div>
                        <div className="ring-cyan-500 transition-all duration-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                            <div className="w-1.5 h-1.5 bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                        <div className="text-cyan-500 transition-all duration-500 dark:text-slate-100">{formatTime(currentTime)}</div>
                        <div className="text-slate-500 transition-all duration-500 dark:text-slate-400">{formatTime(duration)}</div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 text-slate-500 transition-all duration-500 dark:bg-slate-600  dark:text-slate-200 rounded-b-xl flex items-center">
                <div className="flex-auto flex items-center justify-evenly">
                    <button type="button" aria-label="Add to favorites" className="text-red-500 hover:text-red-700 transition-colors duration-300">
                        <FaHeart size={20} />
                    </button>
                </div>
                <button
                    type="button"
                    className="bg-white text-slate-900 transition-all duration-500 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
                    aria-label={isPlaying ? "Pause" : "Play"}
                    onClick={togglePlayPause}
                >
                    {isPlaying ? (
                        <FaPause size={24} className="text-red-500" />
                    ) : (
                        <FaPlay size={24} className="text-green-500" />
                    )}
                </button>
                <div className="flex-auto flex items-center justify-evenly">
                    <select
                        value={playbackSpeed}
                        onChange={handleSpeedChange}
                        className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500"
                    >
                        <option value="1x">1x</option>
                        <option value="1.5x">1.5x</option>
                        <option value="2x">2x</option>
                    </select>
                </div>
            </div>
            {/* Audio element */}
            <audio ref={audioRef} src={audioUrl} preload="auto" />
        </div>
    );
};

export default RadioPlayer;
