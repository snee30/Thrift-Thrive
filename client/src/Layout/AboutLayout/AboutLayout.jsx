import React from "react";

const AboutLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--sage)] flex flex-col items-center justify-center p-4 pt-30">
      {/* Heading */}
      <h1 className="text-4xl text-[var(--forestgreen)] font-bold mb-10">
        About Us
      </h1>

      {/* Three Boxes Section */}
      <div className="flex flex-col gap-8 mt-10 max-w-5xl w-full">
        {/* Box 1: Who Are We (Left) */}
        <div className="bg-[var(--cream)] p-6 rounded-lg shadow-md w-[28rem] h-[28rem] self-start">
          <div className="flex flex-col gap-4 h-full">
            <h2 className="text-2xl text-[var(--forestgreen)] font-bold mb-2">
              Who Are We?
            </h2>
            <p className="text-[var(--darkbrown)] flex-1">
              We are a passionate team dedicated to promoting sustainable
              fashion by making second-hand clothing accessible and affordable
              for everyone.
            </p>
            {/* Space for Image */}
            <div className="w-full h-60 rounded-lg flex items-center justify-center">
              {/* Replace the src with your image path */}
              <img
                src="/other-images/kti.png" // Add your image path here
                alt="Who Are We"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Box 2: What Do We Do (Right, aligned with margin) */}
        <div className="bg-[var(--cream)] p-6 rounded-lg shadow-md w-[28rem] h-[28rem] self-end mt-[-5rem]">
          <div className="flex flex-col gap-4 h-full">
            <h2 className="text-2xl text-[var(--forestgreen)] font-bold mb-2">
              What Do We Do?
            </h2>
            <p className="text-[var(--darkbrown)] flex-1">
              We provide a platform for buying and selling pre-loved clothes and
              accessories, helping you declutter your closet while earning
              money.
            </p>
            {/* Space for Image */}
            <div className="w-full h-70 rounded-lg flex items-center justify-center">
              {/* Replace the src with your image path */}
              <img
                src="/other-images/ktakti.png" // Add your image path here
                alt="What Do We Do"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Box 3: Goals and Missions (Left, aligned with margin) */}
        <div className="bg-[var(--cream)] p-6 rounded-lg shadow-md w-[28rem] h-[28rem] self-start mt-[-5rem]">
          <div className="flex flex-col gap-4 h-full">
            <h2 className="text-2xl text-[var(--forestgreen)] font-bold mb-2">
              Goals and Missions
            </h2>
            <p className="text-[var(--darkbrown)] flex-1">
              Our mission is to reduce textile waste and promote a circular
              economy by encouraging the reuse of clothing and accessories.
            </p>
            {/* Space for Image */}
            <div className="w-full h-60 rounded-lg flex items-center justify-center">
              {/* Replace the src with your image path */}
              <img
                src="/other-images/sweats.png" // Add your image path here
                alt="Goals and Missions"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
