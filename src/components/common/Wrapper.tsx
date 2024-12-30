"use client";
const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="p-5 bg-primary/20 pt-[88px] ml-[17%]">
      <div className="p-4 bg-white rounded-xl min-h-[75vh]">{children}</div>
      <div className="flex justify-between text-primary font-semibold items-center pt-5">
        © 2024. All Rights Reserved
      </div>
    </div>
  );
};

export default Wrapper;
