import Marquee from "react-fast-marquee";


const ToyGallery = () => {
    return (
        <div className="my-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Toy Gallery</h2>
            <Marquee>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/81-qP36VwxL._SL1500_.jpg" />
                <img className="w-[300px] h-[400px] mx-5" src="https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_US%2FCABCF6C6A2714FC593973D9DF41C290D%2Fd2684c79e1ac7cb00f09fbade32a2a7df88bb421.jpg&w=3840&q=75" />
                <img className="w-[300px] h-[400px] mx-5" src="https://www.superherotoystore.com/cdn/shop/products/15266_03_PNG__05404_1600x.png?v=1674125789"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/41DGTYc90qL.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://www.shoppersbd.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/u/superman-man2.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://images-na.ssl-images-amazon.com/images/I/715zrqwr8qL._AC_UL600_SR600,600_.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://www.hasbro.com/common/productimages/en_US/EE8FF2CE80434147BC15FAB2E95580CF/a4f4933cd4bef095a3aa9222f1e99670d3cbbb30.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/71vJN7454cL._AC_SL1500_.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/61BQr8cGfUL._AC_UF1000,1000_QL80_.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/719s1194ksL._AC_SL1500_.jpg"/>
            </Marquee>
        </div>
    );
};

export default ToyGallery;