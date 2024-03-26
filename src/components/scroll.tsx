import React, { useRef, useEffect } from 'react';

const ExampleComponent = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        const handleMouseDown = (e) => {
            if (!scrollRef.current.contains(e.target)) return;

            e.preventDefault();
            isDown = true;
            startX = e.pageX - scrollRef.current.offsetLeft;
            scrollLeft = scrollRef.current.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
        };

        const handleMouseUp = () => {
            isDown = false;
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 3; // adjust the scroll speed
            scrollRef.current.scrollLeft = scrollLeft - walk;
        };

        let isDown = false;
        let startX;
        let scrollLeft;

        scrollRef.current.addEventListener('mousedown', handleMouseDown);
        scrollRef.current.addEventListener('mouseleave', handleMouseLeave);
        scrollRef.current.addEventListener('mouseup', handleMouseUp);
        scrollRef.current.addEventListener('mousemove', handleMouseMove);

        return () => {
            scrollRef.current.removeEventListener('mousedown', handleMouseDown);
            scrollRef.current.removeEventListener('mouseleave', handleMouseLeave);
            scrollRef.current.removeEventListener('mouseup', handleMouseUp);
            scrollRef.current.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="flex flex-col bg-white m-auto p-auto">
            <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
                Example
            </h1>
            <div
                className="flex overflow-x-scroll pb-10 hide-scroll-bar draggable"
                ref={scrollRef}
            >
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    <div className="inline-block px-3">
                        <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                    </div>
                    {/* More divs here */}
                </div>
            </div>
        </div>
    );
};

export default ExampleComponent;
