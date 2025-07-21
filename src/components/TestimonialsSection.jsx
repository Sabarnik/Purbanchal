import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3">
            ← Voices That Cement Our Trust→
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear Directly From Those Who've Built Success With Purbanchal Cement
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#3366BB] text-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute top-6 left-6 text-orange-400 text-5xl opacity-20">
              "
            </div>
            <p className="text-base leading-relaxed mb-6 relative z-10 pl-6">
              We've been associated with Purbanchal cement for 15 years, using
              Surya Gold cement for all our residential projects in Guwahati. The
              quality has been consistently excellent, making for a completely
              satisfactory experience. We look forward to continuing this long
              association.
            </p>
            <div className="flex items-center justify-between mt-6 border-t border-white/20 pt-6">
              <div>
                <h4 className="font-bold text-white text-lg">Mr. Manoj Jalan</h4>
                <p className="text-sm text-white/80 mt-1">
                  Director, Protech Group
                </p>
                <div className="text-yellow-400 text-lg mt-2">★★★★★</div>
              </div>
              {/* Replace with actual white Protech logo path */}
              <img
                src="protech-logo (1).png"
                alt="Protech Logo"
                className="h-15 object-contain brightness-0 invert"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#3366BB] text-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute top-6 left-6 text-orange-400 text-5xl opacity-20">
              "
            </div>
            <p className="text-base leading-relaxed mb-6 relative z-10 pl-6">
              Surya Gold cement has been our choice for all residential projects
              in Guwahati and beyond. Our 10-year association with PCL has been
              marked by consistently high quality. It's been a thoroughly
              satisfactory experience, and we anticipate many more years of
              partnership.
            </p>
            <div className="flex items-center justify-between mt-6 border-t border-white/20 pt-6">
              <div>
                <h4 className="font-bold text-white text-lg">
                  Mr. Amarchand Kalani
                </h4>
                <p className="text-sm text-white/80 mt-1">
                  Owner, Uttrayan Group
                </p>
                <div className="text-yellow-400 text-lg mt-2">★★★★</div>
              </div>
              {/* Replace with actual white Uttrayan logo path */}
              <img
                src="uttarayan-logo.png"
                alt="Uttarayan logo"
                className="h-12 object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;