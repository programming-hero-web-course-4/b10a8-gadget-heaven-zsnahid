/* eslint-disable react/prop-types */
export default function Heading({ title = "Title" }) {
  return (
    <div className="bg-myPurple text-white text-center p-5 min-h-[20vh]">
      <h2 className="text-4xl font-bold mb-3">{title}</h2>
      <p>
        Explore the latest gadgets that will take your experience to the next
        level. <br /> From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
  );
}
