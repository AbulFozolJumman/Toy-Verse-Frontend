/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";

// This is Review Section
const Reviews = () => {
    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-center mb-5">Customer Reviews</h2>
            <Marquee>
                <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-4 w-[400px] h-[200px] mx-5">
                    <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://lh3.googleusercontent.com/a/AGNmyxYK2Uu1lTzoUSYhPrXXi5vPii0TxpKjHaGpdSGF=s96-c" alt="" />
                    <p>This toy is amazing! My child absolutely loves playing with it. The quality is excellent, and it provides hours of entertainment.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-4 w-[400px] h-[200px] mx-5">
                    <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://c.ndtvimg.com/2020-07/cgbi2bc4_oscar-afp_625x300_27_July_20.jpg" alt="" />
                    <p>I bought this toy for my niece, and she couldn't be happier. It's well-designed and safe for kids. Highly recommended!</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-4 w-[400px] h-[200px] mx-5">
                    <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1023,h_682,x_0,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01fkr215j4pkqc47xtka.jpg" alt="" />
                    <p>As a parent, I'm always looking for toys that are educational and fun. This toy ticks all the boxes. My child has learned so much while playing with it.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-4 w-[400px] h-[200px] mx-5">
                    <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.beinsports.com/bT0wwy0bOzWbWsZkBdmX77KpXUQ=/full-fit-in/1000x0/cristianoronaldo-cropped_1p1qsv9ahm97r1ar3m7c4sklup.jpg" alt="" />
                    <p>I am impressed with the durability of this toy. It has been through countless playtime adventures and still looks as good as new. Great value for money!</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-4 w-[400px] h-[200px] mx-5">
                    <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://ca-times.brightspotcdn.com/dims4/default/b7f2ac9/2147483647/strip/true/crop/4032x3024+0+0/resize/1200x900!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4c%2Fc3%2F958c74ba4398af85281ae3c6a5ff%2Fimg-8936.jpeg" alt="" />
                    <p>The toy's interactive features keep my child engaged for hours. It's a fantastic way to promote imaginative play and creativity. Highly recommended for kids of all ages!</p>
                </div>
            </Marquee>
        </div>
    );
};

export default Reviews;