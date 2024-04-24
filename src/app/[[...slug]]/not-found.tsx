import Image from "next/image";

const NotFound = () => {
    return <div className="container">
        <Image src="/images/404.png"
            alt="not found"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
        />
    </div>;
};
export default NotFound;